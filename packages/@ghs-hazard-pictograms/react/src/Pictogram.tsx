import * as React from 'react';
import { getPictogram, renderSvg, splitSvg } from '@ghs-hazard-pictograms/core';
import type { PictogramProps } from './PictogramProps';

/** Props for the generic {@link PictogramById} component. */
export interface PictogramByIdProps extends PictogramProps {
  /** Pictogram slug ID, e.g. `"ghs01-explosive"` or `"division-2-3"`. */
  id: string;
}

/**
 * Renders any GHS hazard or ADR/UN transport pictogram by slug ID.
 *
 * Useful for data-driven rendering where the pictogram ID comes from an API
 * response or user input rather than being known at compile time.
 *
 * Returns `null` for unrecognised IDs so callers can handle missing pictograms
 * gracefully without a try/catch.
 *
 * @example
 * ```tsx
 * <PictogramById id="ghs01-explosive" width={64} />
 * ```
 */
export const PictogramById = React.memo<PictogramByIdProps>(
  ({ id, 'aria-label': ariaLabel, className, description, height, style, title, width }) => {
    const uid = `ghs-${id}-${React.useId().replace(/[^\w-]/g, '')}`;
    const pictogram = getPictogram(id);
    if (!pictogram) return null;

    const svgHtml = renderSvg(splitSvg(pictogram.svg), {
      uid,
      title: title ?? pictogram.name,
      description: description ?? pictogram.description,
      ariaLabel,
      width,
      height,
    });

    return (
      <span
        className={className}
        dangerouslySetInnerHTML={{ __html: svgHtml }}
        style={{ display: 'contents', ...style }}
      />
    );
  },
);
PictogramById.displayName = 'PictogramById';
