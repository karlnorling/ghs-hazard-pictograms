import { getCssClassName, pictogramCssClasses } from '../index';
import { getGHSPictograms } from '@ghs-pictogram/core';

describe('getCssClassName()', () => {
  it('returns a string for a known pictogram id', () => {
    const className = getCssClassName('ghs01-explosive');
    expect(typeof className).toBe('string');
    expect(className!.length).toBeGreaterThan(0);
  });

  it('returns undefined for unknown id', () => {
    expect(getCssClassName('does-not-exist')).toBeUndefined();
  });

  it('returned class name contains no spaces', () => {
    const className = getCssClassName('ghs01-explosive');
    expect(className).not.toMatch(/\s/);
  });
});

describe('pictogramCssClasses', () => {
  it('is a non-empty object', () => {
    expect(typeof pictogramCssClasses).toBe('object');
    expect(Object.keys(pictogramCssClasses).length).toBeGreaterThan(0);
  });

  it('contains entries for all GHS pictograms', () => {
    for (const p of getGHSPictograms()) {
      expect(pictogramCssClasses[p.id]).toBeTruthy();
    }
  });

  it('class names are valid CSS identifiers (no invalid characters)', () => {
    for (const className of Object.values(pictogramCssClasses)) {
      // CSS class names should not start with a digit and contain no spaces
      expect(className).not.toMatch(/\s/);
    }
  });
});
