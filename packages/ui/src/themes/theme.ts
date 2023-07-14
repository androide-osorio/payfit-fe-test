import { css } from 'styled-components';

const typography = {
  base: 16,
  styles: {
    label: css`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.375rem;
      letter-spacing: -0.00938rem;
    `,
    body: css`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5625rem;
      letter-spacing: -0.01875rem;
    `,
    caption: css`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 0.6875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.0625rem; /* 154.545% */
      letter-spacing: 0.00625rem;
    `,
    h1Display: css`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 3rem;
      font-style: normal;
      font-weight: 500;
      line-height: 145%;
      letter-spacing: 0.02688rem;
    `,
    h2: css`
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 1.75rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4375rem;
      letter-spacing: -0.01875rem;
    `,
  },
};

const colors = {
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
  navy: {
    20: '#96A3B3',
    60: '#55687D',
    90: '#223954',
    100: '#132D4A',
    200: '#042040',
  },
  silver: {
    20: '#F7F9FC',
    60: '#EBF0F5',
    100: '#D1DAE6',
    300: '#ABBBCC',
  },
  blue: {
    20: '#EBF4FF',
    100: '#0F6FDE',
  },
  azure: {
    40: '#B5ECF5',
  },
  purple: {
    40: '#CFC2F9',
  },
  red: {
    200: '#D02825',
  },
  yellow: {
    200: '#FFAC39',
  },
  green: {
    200: '#009140',
  },
};

const radii = {
  xs: '6px',
  sm: '8px',
};

const shadows = {
  100: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
};

export const theme = {
  typography,
  colors,
  radii,
  shadows,
};

export type Theme = typeof theme;
