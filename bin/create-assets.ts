/**
 * create-assets.ts
 *
 * Downloads GHS pictogram SVG files from Wikimedia, converts them to raster
 * formats (PNG, JPG, WebP) at multiple sizes, and generates sprite assets.
 *
 * Note: Sequential `await` inside loops is intentional throughout this file.
 * Downloads are throttled to be polite to Wikimedia servers, and image
 * conversion pipelines depend on the previous step completing first.
 */

/* eslint-disable no-await-in-loop */

import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';
import { globSync } from 'glob';
import { optimize } from 'svgo';
import sharp from 'sharp';
import type { ScrapedData } from './scrape';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Wikimedia requires a descriptive User-Agent for non-browser clients. */
// See: https://meta.wikimedia.org/wiki/User-Agent_policy
const USER_AGENT =
  'ghs-hazard-pictograms/0.0.0 (https://github.com/karlnorling/ghs-hazard-pictograms; build-script)';

/** Image formats and sizes to generate for each pictogram. */
const IMAGE_TYPES_MAP = [
  { sizes: [240, 512, 768, 1024, 2048], type: 'svg' },
  { sizes: [240, 512, 768, 1024, 2048], type: 'jpg' },
  { sizes: [240, 512, 768, 1024, 2048], type: 'png' },
  { sizes: [240, 512, 768, 1024, 2048], type: 'webp' },
] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Sanitises a string for use as a file or CSS identifier by replacing
 * path-unsafe characters and whitespace with underscores.
 */
export const sanitize = (str: string): string =>
  str
    .replace(/[/\\?%*:|"<>]/g, '_')
    .replace(/\s/g, '')
    .toLowerCase();

/** Returns a promise that resolves after `ms` milliseconds. */
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

// ---------------------------------------------------------------------------
// Network
// ---------------------------------------------------------------------------

/**
 * Fetches a URL with automatic retry on HTTP 429 / 5xx responses using
 * exponential backoff. Sets the required Wikimedia `User-Agent` header.
 *
 * @param url - The URL to fetch.
 * @param options - Optional fetch options (headers will be merged).
 * @param retries - Maximum number of attempts (default 3).
 * @param delayMs - Base delay in ms for the first retry (doubles each attempt).
 * @throws When all retries are exhausted or a non-retryable error is returned.
 */
const fetchWithRetry = async (
  url: string,
  options: RequestInit = {},
  retries = 3,
  delayMs = 1000,
): Promise<Response> => {
  const headers = {
    'User-Agent': USER_AGENT,
    ...((options.headers as Record<string, string>) ?? {}),
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, { ...options, headers });
    if (res.ok) return res;
    if ((res.status === 429 || res.status >= 500) && attempt < retries) {
      const wait = delayMs * 2 ** (attempt - 1);
      console.warn(
        `  ${res.status} on ${url} — retrying in ${wait}ms (attempt ${attempt}/${retries})`,
      );
      await sleep(wait);
      continue;
    }

    throw new Error(`HTTP ${res.status} fetching ${url}`);
  }

  throw new Error(`All retries exhausted for ${url}`);
};

/**
 * Fetches a Wikimedia file page and extracts the direct image URL from the
 * `.fullImageLink` element. Wikipedia image URLs are indirection pages, not
 * direct links to the image binary.
 *
 * @param url - Wikimedia file page URL.
 * @returns Direct image URL, or `undefined` when the link cannot be found.
 */
const downloadImagePage = async (url: string): Promise<string | undefined> => {
  try {
    const res = await fetchWithRetry(url);
    const data = await res.text();
    const htmlData = parse(data);
    const imageSrcUrl = htmlData.querySelector('.fullImageLink a')?.getAttribute('href');
    return imageSrcUrl ? `https:${imageSrcUrl}` : undefined;
  } catch (err) {
    console.error(`  Error fetching image page ${url}:`, (err as Error).message);
    return undefined;
  }
};

/**
 * Downloads an image from `url` and writes it to `dest`.
 *
 * @param dest - Absolute or relative destination file path.
 * @param url - Direct image URL to download.
 */
const downloadImage = async (dest: string, url: string): Promise<void> => {
  try {
    const res = await fetchWithRetry(url, { headers: { Accept: 'image/svg+xml,image/*' } });
    const data = await res.text();
    await fs.promises.writeFile(dest, data);
    console.log(`  Downloaded: ${path.basename(dest)}`);
  } catch (err) {
    console.error(`  Error downloading ${url}:`, (err as Error).message);
  }
};

// ---------------------------------------------------------------------------
// Image conversion
// ---------------------------------------------------------------------------

/**
 * Converts `image` (an SVG file) into all configured raster formats and sizes,
 * skipping any variant that already exists and is non-empty.
 *
 * @param image - Path to the source SVG file.
 */
const convertImages = async (image: string): Promise<void> => {
  const inputExt = path.extname(image).toLowerCase();
  const inputBuffer = await fs.promises.readFile(image);

  for (const typeObj of IMAGE_TYPES_MAP) {
    for (const size of typeObj.sizes) {
      const outputDir = path.dirname(image);
      const baseName = path.basename(image, inputExt);
      const outputFile = path.join(outputDir, `${baseName}_${size}x${size}.${typeObj.type}`);

      try {
        const stat = await fs.promises.stat(outputFile);
        if (stat.size > 0) continue;
      } catch {
        // File does not exist — proceed with conversion.
      }

      const pipeline = sharp(inputBuffer).resize(size, size);

      if (typeObj.type === 'svg') {
        if (inputExt !== '.svg') continue;
        await fs.promises.copyFile(image, outputFile);
      } else if (typeObj.type === 'jpg') {
        await pipeline.jpeg({ quality: 90 }).toFile(outputFile);
      } else if (typeObj.type === 'png') {
        await pipeline.png({ quality: 90 }).toFile(outputFile);
      } else if (typeObj.type === 'webp') {
        await pipeline.webp({ quality: 90 }).toFile(outputFile);
      }
    }
  }
};

// ---------------------------------------------------------------------------
// Download orchestration
// ---------------------------------------------------------------------------

/**
 * Downloads images for a list of Wikimedia file-page URLs into `destDir`,
 * skipping any files that already exist. Converts each downloaded SVG to all
 * raster variants via {@link convertImages}.
 *
 * @param destDir - Directory to write downloaded images into.
 * @param images - Array of Wikimedia file-page URLs.
 */
const processImages = async (destDir: string, images: string[]): Promise<void> => {
  await fs.promises.mkdir(destDir, { recursive: true });

  for (const imgPageUrl of images) {
    const imgName = decodeURIComponent(path.basename(imgPageUrl)).replace(/^File:/, '');
    const dest = path.join(destDir, imgName);

    // Skip if the SVG already exists and is non-empty to avoid re-downloading on re-runs.
    try {
      const stat = await fs.promises.stat(dest);
      if (stat.size > 0) {
        console.log(`  Skipping (exists): ${path.basename(dest)}`);
        await convertImages(dest);
        continue;
      }
    } catch {
      // File does not exist — proceed with download.
    }

    const imageUrl = await downloadImagePage(imgPageUrl);
    if (imageUrl) {
      await downloadImage(dest, imageUrl);
      await sleep(300); // Polite delay between Wikimedia requests.
      await convertImages(dest);
    }
  }
};

// ---------------------------------------------------------------------------
// Sprite generation
// ---------------------------------------------------------------------------

/** Root directory of the assets package. */
const ASSETS_ROOT = path.join('packages', '@ghs-pictogram', 'assets', 'assets');

/**
 * Builds `packages/@ghs-pictogram/assets/assets/svg-map.json` — a JSON object mapping each SVG's
 * relative path (within the assets directory) to its full SVG content string.
 */
const createSVGMap = async (): Promise<void> => {
  const svgMap: Record<string, string> = {};
  const svgFiles = globSync(path.join(ASSETS_ROOT, '**', '*.svg'));

  for (const file of svgFiles) {
    const svgContent = await fs.promises.readFile(file, 'utf-8');
    const key = path.relative(ASSETS_ROOT, file).replace(/\\/g, '/');
    svgMap[key] = svgContent;
  }

  const mapFile = path.join(ASSETS_ROOT, 'svg-map.json');
  await fs.promises.writeFile(mapFile, JSON.stringify(svgMap, null, 2), 'utf-8');
  console.log(`SVG map written to ${mapFile}`);
};

/**
 * Builds `packages/@ghs-pictogram/sprite/sprite.svg` — a hidden SVG container with one
 * `<symbol>` element per pictogram that can be referenced via `<use href="#id">`.
 *
 * Also writes `packages/@ghs-pictogram/sprite/sprite-ids.json` with the list of symbol IDs.
 */
const createSVGSprite = async (): Promise<void> => {
  const spriteDir = path.join('packages', '@ghs-pictogram', 'sprite');
  await fs.promises.mkdir(spriteDir, { recursive: true });

  const svgFiles = glob
    .sync(path.join(ASSETS_ROOT, '**', '*.svg'))
    .filter((f) => !f.includes('sprites'));

  const ids: string[] = [];
  const symbols: string[] = [];

  for (const file of svgFiles) {
    const raw = await fs.promises.readFile(file, 'utf-8');
    const key = path.relative(ASSETS_ROOT, file).replace(/\\/g, '/');
    const id = sanitize(key)
      .replace(/\.svg$/, '')
      .replace(/[._]/g, '-');
    ids.push(id);

    const optimized = optimize(raw, { multipass: true, plugins: ['preset-default'] });
    const svgContent = optimized.data
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/<!DOCTYPE[^>]*>/g, '')
      .trim();

    const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
    const viewBox = viewBoxMatch ? ` viewBox="${viewBoxMatch[1]}"` : '';
    const innerContent = svgContent.replace(/<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

    symbols.push(`  <symbol id="${id}"${viewBox}>${innerContent}</symbol>`);
  }

  const sprite = [
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none">`,
    ...symbols,
    `</svg>`,
  ].join('\n');

  const spriteFile = path.join(spriteDir, 'sprite.svg');
  await fs.promises.writeFile(spriteFile, sprite, 'utf-8');
  console.log(`SVG sprite written to ${spriteFile} (${ids.length} symbols)`);

  const idMapFile = path.join(spriteDir, 'sprite-ids.json');
  await fs.promises.writeFile(idMapFile, JSON.stringify(ids, null, 2), 'utf-8');
  console.log(`SVG sprite ID map written to ${idMapFile}`);
};

/**
 * Builds `packages/@ghs-pictogram/css/sprite.css` — one `.ghs-*` CSS class per SVG file,
 * using `background-image` to reference the individual SVG file from the assets package.
 *
 * URL paths are relative from the css package to the assets package, which works both
 * in the monorepo (via node_modules symlinks) and when packages are installed separately.
 */
const createCSSSprite = async (): Promise<void> => {
  const cssPkgDir = path.join('packages', '@ghs-pictogram', 'css');
  await fs.promises.mkdir(cssPkgDir, { recursive: true });

  const svgFiles = glob
    .sync(path.join(ASSETS_ROOT, '**', '*.svg'))
    .filter((f) => !f.includes('sprites'));

  const cssContent = svgFiles
    .map((file) => {
      const key = path.relative(ASSETS_ROOT, file).replace(/\\/g, '/');
      const className = `ghs-${sanitize(key).replace(/\.svg$/, '')}`;
      // URL is relative from the css package to the assets package in node_modules
      return `.${className} { background-image: url('../assets/assets/${key}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`;
    })
    .join('\n');

  const cssFile = path.join(cssPkgDir, 'sprite.css');
  await fs.promises.writeFile(cssFile, cssContent, 'utf-8');
  console.log(`CSS sprite written to ${cssFile}`);
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Main asset creation pipeline. Walks the scraped data, downloads missing SVG
 * files from Wikimedia, converts them to raster variants, then generates the
 * SVG map, SVG sprite, and CSS sprite.
 *
 * @param res - Scraped pictogram data from {@link scrape}.
 * @param basePath - Root directory to write assets into (default: assets package directory).
 */
const createAssets = async (res: ScrapedData, basePath = ASSETS_ROOT): Promise<void> => {
  for (const key of Object.keys(res)) {
    const section = (res as Record<string, unknown>)[key] as Record<string, unknown>;
    const folder = path.join(basePath, sanitize(key));
    await fs.promises.mkdir(folder, { recursive: true });

    if (section['data']) {
      const data = section['data'] as Record<string, { images?: string[] }>;
      for (const subKey of Object.keys(data)) {
        const entry = data[subKey];
        if (entry.images && Array.isArray(entry.images)) {
          await processImages(path.join(folder, sanitize(subKey)), entry.images);
        }
      }
    } else {
      for (const subKey of Object.keys(section)) {
        const subsection = section[subKey] as Record<string, unknown>;
        const data = subsection['data'] as Record<string, { images?: string[] }> | undefined;
        if (!data) continue;
        for (const entryKey of Object.keys(data)) {
          const entry = data[entryKey];
          if (entry.images && Array.isArray(entry.images)) {
            await processImages(path.join(folder, sanitize(subKey)), entry.images);
          }
        }
      }
    }
  }

  await createSVGMap();
  await createSVGSprite();
  await createCSSSprite();
};

export default createAssets;
