import { ReactNode } from 'react'
import { type DefaultTheme, ThemeProvider as StyledThemeProvider, css } from 'styled-components'

/**
 * https://styled-components.com/docs/advanced#theming
 */
const theme = {
  typography: {
    base: 16,
    styles: {
      200: css`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5625rem;
        letter-spacing: -0.01875rem;
      `,
    },
  },
  colors: {
    common: {
      white: '#FFFFFF',
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
  },
  radii: {
    xs: '6px',
    sm: '8px',
  }
};

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <StyledThemeProvider theme={theme as Theme}>
    {children}
  </StyledThemeProvider>
)
