import React from 'react';
import { Theme } from './ThemeProvider';
import styled, { useTheme } from 'styled-components';

const alertThemeMap = (theme: Theme) => ({
  padding: '1rem 1.5rem',
	borderRadius: theme.radii.sm,
  background: {
    primary: theme.colors.navy[20],
    success: theme.colors.green[200],
    danger: theme.colors.red[200],
    warning: theme.colors.yellow[200],
  },
  text: {
    primary: theme.colors.navy[100],
    success: theme.colors.common.white,
    danger: theme.colors.common.white,
    warning: theme.colors.common.white,
  },
});

type ThemeMap = ReturnType<typeof alertThemeMap>;

type AlertProps = React.PropsWithChildren<{
  variant?: 'primary' | 'success' | 'danger' | 'warning';
}>;

const StyledAlert = styled.div<{
  $variant: NonNullable<AlertProps['variant']>;
  $themeMap: ThemeMap;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
	border-radius: ${({ $themeMap }) => $themeMap.borderRadius};
  padding: ${({ $themeMap }) => $themeMap.padding};
  background: ${({ $themeMap, $variant }) => $themeMap.background[$variant]};
  color: ${({ $themeMap, $variant }) => $themeMap.text[$variant]};
`;

export const Alert = ({ variant, children, ...rest }: AlertProps) => {
  const theme = useTheme() as Theme;
  return (
    <StyledAlert
			{...rest}
      $variant={variant ?? 'primary'}
      $themeMap={alertThemeMap(theme)}
    >
      {children}
    </StyledAlert>
  );
};
