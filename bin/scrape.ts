/**
 * scrape.ts
 *
 * Scrapes GHS hazard pictogram data from the Wikipedia article
 * "GHS hazard pictograms". Returns structured data including image URLs
 * and copy text for each pictogram.
 *
 * Run indirectly via `yarn update` (bin/update.ts).
 */

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
      // Single forward scan: record the last image link seen, then assign it to the next
      // title row. This is robust against anomaly rows (e.g. rowspan continuation rows in
      // the Classes 3 & 4 table) that break index-parity assumptions.
      const rows = table ? [...table.querySelectorAll('tr')] : [];
      let pendingHref: string | null = null;
      let pendingCopy: string | null = null;

      for (let i = 1; i < rows.length; i++) {
        const tr = rows[i];
        const imageAnchor = tr.querySelector('td a[href*="/wiki/File:"]');
        if (imageAnchor) {
          pendingHref = `https://en.wikipedia.org${imageAnchor.getAttribute('href')}`;
          pendingCopy = tr.querySelector('td:last-child ul, td:last-child p')?.textContent ?? null;
          continue;
        }
        const th = tr.querySelector('th');
        if (th && pendingHref !== null) {
          const title = th.textContent.trim();
          if (title && !pictograms[title]) {
            pictograms[title] = { title, images: [pendingHref], copy: pendingCopy };
            pendingHref = null;
            pendingCopy = null;
          }
        }
      }
    } else if (scrapeMethod === 'horizontal') {
      // Locate rows by content rather than index: the Non-GHS table has images first,
      // then title headers, then copy — so we can't rely on a fixed row order.
      const rows = table ? [...table.querySelectorAll('tr')] : [];
      const headerRow = rows.find((tr) => tr.querySelectorAll('th').length > 0);
      const imageRow = rows.find((tr) => tr.querySelector('td a[href*="/wiki/File:"]') !== null);

      if (headerRow && imageRow) {
        // Expand column titles respecting colspan, tracking which copy cell each column maps to.
        const expandedTitles: string[] = [];
        const expandedCopyIdx: number[] = [];
        let copyColIdx = 0;

        for (const th of headerRow.querySelectorAll('th')) {
          const colspan = Math.max(1, parseInt(th.getAttribute('colspan') ?? '1', 10) || 1);
          const title = th.textContent.trim();
          for (let i = 0; i < colspan; i++) {
            expandedTitles.push(title);
            expandedCopyIdx.push(copyColIdx);
          }
          copyColIdx++;
        }

        const titleCount = new Map<string, number>();
        for (const t of expandedTitles) titleCount.set(t, (titleCount.get(t) ?? 0) + 1);

        const copyRow = rows.find(
          (tr) => tr !== imageRow && tr.querySelectorAll('td').length > 0 && !tr.querySelector('a[href*="/wiki/File:"]'),
        );
        const copyCells = copyRow ? [...copyRow.querySelectorAll('td')] : [];

        [...imageRow.querySelectorAll('td')].forEach((td, colIdx) => {
          const href = td.querySelector('a[href*="/wiki/File:"]')?.getAttribute('href');
          if (!href) return;

          const baseTitle = expandedTitles[colIdx] ?? `Item ${colIdx}`;
          let title = baseTitle;

          if ((titleCount.get(baseTitle) ?? 1) > 1) {
            // Multiple images under the same header — derive unique title from filename.
            title = decodeURIComponent(href.split('/').pop() ?? '')
              .replace(/^File:/, '')
              .replace(/\.[^.]+$/, '')
              .replace(/_/g, ' ');
          }

          const copyText = copyCells[expandedCopyIdx[colIdx] ?? colIdx]?.textContent.trim() ?? null;
          pictograms[title] = { title, copy: copyText, images: [`https://en.wikipedia.org${href}`] };
        });
      }
    }

    section['data'] = pictograms;
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
