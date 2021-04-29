// these breakpoints refer to gallery layout with maw-width 350px
const breakpoints = {
  xs: 340,
  sm: 480,
  md: 668,
  lg: 960,
  xl: 1480,
};

export const mediaQuery = key => style =>
  `@media only screen and (min-width: ${breakpoints[key]}px) { ${style} }`;

export const mediaQueryMax = key => style =>
  `@media only screen and (max-width: ${breakpoints[key]}px) { ${style} }`;
