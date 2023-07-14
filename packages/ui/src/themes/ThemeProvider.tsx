import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { type Theme } from './theme';

type Props = React.PropsWithChildren<{
  theme?: Theme;
}>;

export const ThemeProvider = ({ children, theme }: Props) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
