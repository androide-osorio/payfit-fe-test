import { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { type Theme } from '../themes';

export const useComponentTheme = <T>(themeFn: (theme: Theme) => T): T => {
  const theme = useTheme() as Theme;
  const resolvedtheme = useMemo(() => themeFn(theme), [theme, themeFn]);
  return resolvedtheme;
};
