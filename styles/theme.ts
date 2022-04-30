import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// @ts-ignore
const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const colors = {
  background: '#12141D',
  secondary: '#080808',
  complement: '#FA934F',
  displayColor: '#FFFFFF',
  textPrimary: '#D1D5DB',
  textSecondary: '#8F9094',
  button1: '#3CCF91',
  button2: '#F6A20E',
  button3: '#5132BF',
  borderColor: '#111111',
};

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const breakpoints = createBreakpoints({
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '80em',
});

const Link = {
  baseStyle: {
    color: '#3CCF91',
    _hover: { color: '#F6A20E', textDecoration: 'none' },
  },
};

const overrides = {
  ...chakraTheme,
  components: {
    Link,
  },
  config,
  colors,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    display: fluidType(80, 144),
    display2: fluidType(24, 36),
    display3: fluidType(16, 24),
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
