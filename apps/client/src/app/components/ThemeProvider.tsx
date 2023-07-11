import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

/**
 * https://styled-components.com/docs/advanced#theming
 */
const theme = {
  colors: {
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
    },
    blue: {
      20: '#EBF4FF',
      100: '#0F6FDE',
    },
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <StyledThemeProvider theme={theme}>
    {children}
  </StyledThemeProvider>
)
