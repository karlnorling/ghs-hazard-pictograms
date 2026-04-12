/**
 * scrape.ts
 *
 * Scrapes GHS hazard pictogram data from the Wikipedia article
 * "GHS hazard pictograms". Returns structured data including image URLs
 * and copy text for each pictogram.
 *
 * Run indirectly via `yarn update` (bin/update.ts).
 */

import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** A single scraped pictogram entry. */
export interface ScrapedPictogram {
  /** Descriptive copy text for the pictogram (hazard classes it covers). */
  copy: string | null;
  /** Wikipedia file page URLs for the pictogram images. */
  images: string[];
  /** Heading title from the Wikipedia table, e.g. "GHS01: Explosive". */
  title: string;
}

/** A section of pictograms scraped from a single Wikipedia table. */
export interface ScrapedSection {
  /** Scraped pictogram entries, keyed by their Wikipedia heading title. */
  data: Record<string, ScrapedPictogram>;
  /** Number of sibling elements to traverse from the heading to reach the table. */
  nextSiblingCount: number;
  /** Whether the table is laid out vertically (one row per pictogram) or horizontally. */
  scrapeMethod: 'horizontal' | 'vertical';
}

/** Indexed map of subsection name → {@link ScrapedSection} for transport pictograms. */
export interface ScrapedTransportSection {
  [subsection: string]: ScrapedSection;
}

/** Root shape of the data returned by {@link scrape}. */
export type ScrapedData = {
  Environmental_hazards_pictograms: ScrapedSection;
  Health_hazards_pictograms: ScrapedSection;
  Physical_and_health_hazard_pictograms: ScrapedSection;
  Physical_hazards_pictograms: ScrapedSection;
  Transport_pictograms: ScrapedTransportSection;
};

// ---------------------------------------------------------------------------
// Scrape configuration
// ---------------------------------------------------------------------------

/** Initial scrape config — data fields are populated during scraping. */
const scrapedData: ScrapedData = {
  Environmental_hazards_pictograms: {
    data: {},
    nextSiblingCount: 1,
    scrapeMethod: 'vertical',
  },
  Health_hazards_pictograms: {
    data: {},
    nextSiblingCount: 1,
    scrapeMethod: 'vertical',
  },
  Physical_and_health_hazard_pictograms: {
    data: {},
    nextSiblingCount: 3,
    scrapeMethod: 'vertical',
  },
  Physical_hazards_pictograms: {
    data: {},
    nextSiblingCount: 1,
    scrapeMethod: 'vertical',
  },
  Transport_pictograms: {
    'Class_1:_Explosives': {
      data: {},
      nextSiblingCount: 3,
      scrapeMethod: 'vertical',
    },
    'Class_2:_Gases': {
      data: {},
      nextSiblingCount: 1,
      scrapeMethod: 'vertical',
    },
    'Classes_3_and_4:_Flammable_liquids_and_solids': {
      data: {},
      nextSiblingCount: 1,
      scrapeMethod: 'vertical',
    },
    Other_GHS_transport_classes: {
      data: {},
      nextSiblingCount: 1,
      scrapeMethod: 'vertical',
    },
    'Non-GHS_transport_pictograms': {
      data: {},
      nextSiblingCount: 2,
      scrapeMethod: 'horizontal',
    },
  },
};

// ---------------------------------------------------------------------------
// Scraping logic
// ---------------------------------------------------------------------------

/**
 * Recursively walks the scraped data tree, filling each section's `data` field
 * by parsing the corresponding HTML table from the Wikipedia page.
 *
 * @param htmlData - Parsed HTML document.
 * @param data - The current level of the scrape config object to process.
 * @returns The same `data` object with `data` fields populated.
 */
const scrapingData = (
  htmlData: ReturnType<typeof parse>,
  data: Record<string, unknown>,
): Record<string, unknown> => {
  Object.keys(data).forEach((key) => {
    const section = data[key] as Record<string, unknown>;
    const { nextSiblingCount, scrapeMethod } = section as ScrapedSection;
    const sectionData = section['data'] as Record<string, ScrapedPictogram> | undefined;

    if (!sectionData) {
      scrapingData(htmlData, section);
      return;
    }

    const heading = htmlData.getElementById(key);
    let table = heading?.parentNode;

    for (let i = 0; i < nextSiblingCount; i++) {
      table = table?.nextElementSibling ?? undefined;
    }

    const pictograms: Record<string, ScrapedPictogram> = {};

    if (scrapeMethod === 'vertical') {
      // First pass: collect titles from even rows.
      table?.querySelectorAll('tr').forEach((tr, index) => {
        if (index > 0 && index % 2 === 0) {
          const title = tr.querySelector('th')?.textContent.trim();
          if (title && !pictograms[title]) {
            pictograms[title] = { copy: null, images: [], title };
          }
        }
      });

      // Second pass: collect images and descriptive copy.
      table?.querySelectorAll('tr').forEach((tr, index) => {
        if (index > 0) {
          const potentialKeyTitle = tr.nextElementSibling?.textContent.trim();
          if (potentialKeyTitle && pictograms[potentialKeyTitle]) {
            const href = tr.querySelector('td a')?.getAttribute('href');
            if (href) {
              pictograms[potentialKeyTitle].images.push(`https://en.wikipedia.org${href}`);
            }

            const copy = tr.querySelector('td:last-child ul, td:last-child p')?.textContent;
            pictograms[potentialKeyTitle].copy = copy ?? null;
          }
        }
      });

      section['data'] = pictograms;
    } else if (scrapeMethod === 'horizontal') {
      const horizontalHeading = htmlData.getElementById(key);
      const horizontalTable =
        nextSiblingCount === 1
          ? horizontalHeading?.parentNode.nextElementSibling
          : horizontalHeading?.parentNode.nextElementSibling?.nextElementSibling;

      const horizontalPictograms: Record<string, ScrapedPictogram> = {};

      horizontalTable?.querySelectorAll('th').forEach((th) => {
        const title = th?.textContent.trim();
        if (title && !horizontalPictograms[title]) {
          horizontalPictograms[title] = { copy: null, images: [], title };
        }
      });

      const allLinks = horizontalTable?.querySelectorAll('td a') ?? [];
      const allCopyCells = horizontalTable?.querySelectorAll('tr:nth-child(3) td') ?? [];
      const keys = Object.keys(horizontalPictograms);

      keys.forEach((k, keyIndex) => {
        allLinks.forEach((a, index) => {
          const href = a?.getAttribute('href');
          if (!href) return;
          const image = `https://en.wikipedia.org${href}`;
          if (index === 0 && keyIndex === 0) {
            horizontalPictograms[k].images.push(image);
          } else if (index > 0 && index < allLinks.length - 1 && keyIndex === 1) {
            horizontalPictograms[k].images.push(image);
          } else if (keyIndex === 2 && index + 1 === allLinks.length) {
            horizontalPictograms[k].images.push(image);
          }
        });

        allCopyCells.forEach((td, index) => {
          const copy = td.textContent.trim();
          if (index === 0 && keyIndex === 0) {
            horizontalPictograms[k].copy = copy;
          } else if (index > 0 && index < allCopyCells.length - 1 && keyIndex === 1) {
            horizontalPictograms[k].copy = copy;
          } else if (keyIndex === 2 && index + 1 === allCopyCells.length) {
            horizontalPictograms[k].copy = copy;
          }
        });
      });

      section['data'] = horizontalPictograms;
    }
  });

  return data;
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetches the GHS hazard pictograms Wikipedia page and extracts structured
 * pictogram data for all sections (physical, health, environmental, transport).
 *
 * @returns Resolved {@link ScrapedData} containing all pictogram entries.
 * @throws When the Wikipedia page cannot be fetched (non-200 HTTP status).
 */
const scrape = async (): Promise<ScrapedData> => {
  const GHS_HAZARD_URL = 'https://en.wikipedia.org/wiki/GHS_hazard_pictograms';
  const response = await fetch(GHS_HAZARD_URL);
  if (response.status === 200) {
    const data = await response.text();
    const htmlData = parse(data);
    return scrapingData(htmlData, scrapedData as unknown as Record<string, unknown>) as ScrapedData;
  }

  throw new Error(`Failed to fetch Wikipedia page: ${response.status}`);
};

export default scrape;
