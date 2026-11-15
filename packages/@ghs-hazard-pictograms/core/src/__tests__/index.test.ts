import {
  getAllPictograms,
  renderSvg,
  splitSvg,
  getPictogram,
  getPictogramByCode,
  getPictogramsByCategory,
  getGHSPictograms,
} from '../index';

const GHS_CODES = ['GHS01', 'GHS02', 'GHS03', 'GHS04', 'GHS05', 'GHS06', 'GHS07', 'GHS08', 'GHS09'];

describe('getAllPictograms()', () => {
  it('returns at least 9 pictograms (the core GHS set)', () => {
    expect(getAllPictograms().length).toBeGreaterThanOrEqual(9);
  });

  it('each pictogram has all required fields', () => {
    for (const p of getAllPictograms()) {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.category).toBeTruthy();
      if (p.category !== 'transport') expect(p.description).toBeTruthy();
      expect(p.svg).toContain('<svg');
      expect(p.assets.svg).toBeTruthy();
      expect(typeof p.assets.png[240]).toBe('string');
      expect(typeof p.assets.jpg[512]).toBe('string');
      expect(typeof p.assets.webp[1024]).toBe('string');
    }
  });
});

describe('getGHSPictograms()', () => {
  it('returns exactly 9 core GHS pictograms', () => {
    expect(getGHSPictograms().length).toBe(9);
  });

  it('contains all GHS codes GHS01–GHS09', () => {
    const codes = getGHSPictograms().map((p) => p.code);
    for (const code of GHS_CODES) {
      expect(codes).toContain(code);
    }
  });

  it('each GHS pictogram has a valid code', () => {
    for (const p of getGHSPictograms()) {
      expect(p.code).toMatch(/^GHS\d{2}$/);
    }
  });
});

describe('getPictogram(id)', () => {
  it('returns the correct pictogram by id', () => {
    const p = getPictogram('ghs01-explosive');
    expect(p).toBeDefined();
    expect(p!.code).toBe('GHS01');
    expect(p!.name).toBe('Explosive');
  });

  it('returns undefined for unknown id', () => {
    expect(getPictogram('does-not-exist')).toBeUndefined();
  });
});

describe('getPictogramsByCategory()', () => {
  it('returns only physical_hazards pictograms', () => {
    const results = getPictogramsByCategory('physical_hazards');
    expect(results.length).toBeGreaterThan(0);
    for (const p of results) {
      expect(p.category).toBe('physical_hazards');
    }
  });

  it('returns transport pictograms', () => {
    const results = getPictogramsByCategory('transport');
    expect(results.length).toBeGreaterThan(0);
  });

  it('GHS01 is in physical_hazards category', () => {
    const physicalHazards = getPictogramsByCategory('physical_hazards');
    const ghs01 = physicalHazards.find((p) => p.code === 'GHS01');
    expect(ghs01).toBeDefined();
  });
});

describe('pictogram data quality', () => {
  it('GHS01 has a meaningful description', () => {
    const p = getPictogram('ghs01-explosive');
    expect(p!.description).toContain('Explosive');
  });

  it('GHS06 is toxic', () => {
    const p = getPictogram('ghs06-toxic');
    expect(p!.name).toBe('Toxic');
    expect(p!.svg).toContain('<svg');
  });

  it('GHS09 is in environmental_hazards', () => {
    const p = getPictogram('ghs09-hazardous-to-the-environment');
    expect(p!.category).toBe('environmental_hazards');
  });

  it('all SVG strings are valid SVG', () => {
    for (const p of getGHSPictograms()) {
      expect(p.svg).toMatch(/<svg[^>]*>/);
      expect(p.svg).toContain('</svg>');
    }
  });

  it('each pictogram has asset paths for all sizes and types', () => {
    const sizes = [240, 512, 768, 1024, 2048];
    for (const p of getGHSPictograms()) {
      for (const size of sizes) {
        expect(p.assets.png[size]).toBeTruthy();
        expect(p.assets.jpg[size]).toBeTruthy();
        expect(p.assets.webp[size]).toBeTruthy();
      }
    }
  });
});

describe('pictogram SVG data', () => {
  it('returns a copy from getAllPictograms()', () => {
    const all = getAllPictograms();
    all.length = 0;
    expect(getAllPictograms().length).toBeGreaterThan(0);
  });

  it('every SVG is optimised and has a viewBox', () => {
    for (const p of getAllPictograms()) {
      expect(p.svg).not.toContain('<?xml');
      expect(p.svg).not.toMatch(/sodipodi|inkscape:/);
      expect(p.svg).toMatch(/^<svg[^>]*\sviewBox="[^"]+"/);
    }
  });
});

describe('SVG helpers', () => {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20">' +
    '<defs><linearGradient id="g"/></defs><rect fill="url(#g)"/><use href="#g"/></svg>';

  it('splitSvg separates size, attributes and body', () => {
    const parts = splitSvg(svg);
    expect(parts.width).toBe('10');
    expect(parts.height).toBe('20');
    expect(parts.attrs).toBe('xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 20"');
  });

  it('renderSvg scopes internal IDs and references to the instance', () => {
    const html = renderSvg(splitSvg(svg), { uid: 'x1', title: 'T', description: 'D' });
    expect(html).toContain('id="x1-g"');
    expect(html).toContain('url(#x1-g)');
    expect(html).toContain('href="#x1-g"');
    expect(html).toContain('aria-labelledby="x1--title x1--desc"');
  });

  it('renderSvg escapes user-supplied values', () => {
    const html = renderSvg(splitSvg(svg), {
      uid: 'x',
      title: '<b>',
      description: '"',
      ariaLabel: '"><script>',
      width: '1" onload="x',
    });
    expect(html).not.toContain('<b>');
    expect(html).not.toContain('<script>');
    expect(html).toContain('width="1&quot; onload=&quot;x"');
    expect(html).toContain('aria-label="&quot;&gt;&lt;script&gt;"');
  });
});

describe('getPictogramByCode()', () => {
  it('finds a GHS pictogram by its code', () => {
    expect(getPictogramByCode('GHS01')?.id).toBe('ghs01-explosive');
  });

  it('is case-insensitive and tolerates surrounding whitespace', () => {
    expect(getPictogramByCode('ghs01')?.id).toBe('ghs01-explosive');
    expect(getPictogramByCode('  GHS01  ')?.id).toBe('ghs01-explosive');
  });

  it('finds transport pictograms by their ADR label designation', () => {
    expect(getPictogramByCode('1.4')?.name).toBe('Division 1.4');
    expect(getPictogramByCode('2.1')?.name).toBe('Division 2.1');
    expect(getPictogramByCode('6.2')?.name).toBe('Class 6.2');
    expect(getPictogramByCode('7A')?.name).toBe('ADR 7A');
    expect(getPictogramByCode('9')?.name).toBe('Class 9');
  });

  // Label model No. 1 covers divisions 1.1-1.3, so the code is "1" while the
  // name keeps the full range.
  it('maps code "1" to the combined divisions 1.1-1.3 label', () => {
    const p = getPictogramByCode('1');
    expect(p?.id).toBe('divisions-1-1-1-3');
    expect(p?.code).toBe('1');
  });

  it('returns undefined for an unknown or empty code', () => {
    expect(getPictogramByCode('GHS99')).toBeUndefined();
    expect(getPictogramByCode('')).toBeUndefined();
    expect(getPictogramByCode('   ')).toBeUndefined();
  });
});

describe('transport pictogram codes', () => {
  // These shipped as `code: ""` until the generator learned to read the ADR
  // designation out of titles like "Division 1.4".
  it('every transport pictogram carries a code', () => {
    const transport = getPictogramsByCategory('transport');
    expect(transport.length).toBeGreaterThan(0);
    for (const p of transport) expect(p.code).toBeTruthy();
  });

  // Only among pictograms that have a code: ADR numbers its labels but not its
  // marks, so every `transport_marks` entry shares an empty code by design.
  it('codes are unique wherever present, and never collide with GHS codes', () => {
    const codes = getAllPictograms()
      .map((p) => p.code)
      .filter(Boolean);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it('leaves getGHSPictograms() returning exactly the nine GHS pictograms', () => {
    expect(getGHSPictograms().map((p) => p.code).sort()).toEqual([...GHS_CODES].sort());
  });
});

describe('transport marks', () => {
  // ADR separates labels (the numbered diamonds, 5.2.2.2) from marks
  // (5.2.1, 5.5). Only the labels are on the Wikipedia page this repo scrapes,
  // so the marks are curated in data/extra-pictograms.json.
  it('includes the four ADR marks', () => {
    const ids = getPictogramsByCategory('transport_marks')
      .map((p) => p.id)
      .sort();
    expect(ids).toEqual([
      'fumigation-warning',
      'limited-quantity',
      'marine-pollutant',
      'package-orientation',
    ]);
  });

  it('marks carry no code, because ADR does not number them', () => {
    for (const p of getPictogramsByCategory('transport_marks')) {
      expect(p.code).toBe('');
    }
  });

  it('every mark ships real artwork', () => {
    for (const p of getPictogramsByCategory('transport_marks')) {
      expect(p.svg).toMatch(/^<svg/);
      expect(p.svg).toMatch(/<path/);
      expect(p.assets.svg).toBeTruthy();
    }
  });

  it('marks are excluded from the GHS set', () => {
    const ghsIds = getGHSPictograms().map((p) => p.id);
    expect(ghsIds).not.toContain('marine-pollutant');
    expect(ghsIds).toHaveLength(9);
  });
});
