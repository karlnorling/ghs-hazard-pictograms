import {
  getAllPictograms,
  getPictogram,
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
      expect(p.description).toBeTruthy();
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
