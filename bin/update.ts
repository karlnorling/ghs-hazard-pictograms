/**
 * update.ts
 *
 * Full pipeline runner: scrape → cache → create assets → generate source.
 * Run via: yarn update
 */

import fs from 'fs';
import path from 'path';
import scrape from './scrape';
import createAssets from './create-assets';
import { generateSource } from './generate-source';

(async () => {
  console.log('Step 1/3: Scraping Wikipedia...');
  const res = await scrape();

  // Cache scraped data so generate-source can run independently without re-scraping.
  const dataDir = path.join('data');
  await fs.promises.mkdir(dataDir, { recursive: true });
  const cacheFile = path.join(dataDir, 'scraped.json');
  await fs.promises.writeFile(cacheFile, JSON.stringify(res, null, 2), 'utf-8');
  console.log(`Scraped data cached to ${cacheFile}`);

  console.log('\nStep 2/3: Creating assets...');
  await createAssets(res);

  console.log('\nStep 3/3: Generating source files...');
  await generateSource();

  console.log('\nAll done!');
})();
