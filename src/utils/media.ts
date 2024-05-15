// src/utils/media.ts
import { css, CSSObject, Interpolation } from "styled-components";

const sizes = {
  tablet: 1440,
  phone: 810,
};

type Sizes = typeof sizes;
type Media = {
  [key in keyof Sizes]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: Interpolation<any>[]
  ) => Interpolation<any>;
};

export const media: Media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label as keyof Sizes] / 16;
  accumulator[label as keyof Sizes] = (first, ...interpolations) => css`
    @media (max-width: ${emSize}em) {
      ${css(first, ...interpolations)}
    }
  `;
  return accumulator;
}, {} as Media);
