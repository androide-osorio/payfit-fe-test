import styled, { useTheme } from 'styled-components';
import { Theme } from './ThemeProvider';

type BadgeProps = React.PropsWithChildren<{
  color: 'silver' | 'blue' | 'azure' | 'purple';
}>;

const badgeThemeMap = (theme: Theme) => ({
  textColor: theme.colors.navy[100],
  textStyle: theme.typography.styles.label,
  borderRadius: theme.radii.sm,
  background: {
    silver: theme.colors.silver[60],
    blue: theme.colors.blue[20],
    azure: theme.colors.azure[40],
    purple: theme.colors.purple[40],
  },
});

type ThemeMap = ReturnType<typeof badgeThemeMap>;

const BadgeBase = styled.span<{
  $themeMap: ThemeMap;
  $color: BadgeProps['color'];
}>`
  display: inline-flex;
  align-items: center;
  padding: 0.0625rem 0.5rem;
  border-radius: ${({ $themeMap }) => $themeMap.borderRadius};
  background-color: ${({ $themeMap, $color }) => $themeMap.background[$color]};
  color: ${({ $themeMap }) => $themeMap.textColor};
  ${({ $themeMap }) => $themeMap.textStyle};
`;

export const Badge = (props: BadgeProps) => {
  const { color, children, ...rest } = props;
  const theme = useTheme() as Theme;
  const themeMap = badgeThemeMap(theme);

  return (
    <BadgeBase $themeMap={themeMap} $color={color} {...rest}>
      {children}
    </BadgeBase>
  );
};
