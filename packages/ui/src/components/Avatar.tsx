import styled, { useTheme } from 'styled-components';
import { type Theme } from '../themes';
import { useComponentTheme } from '../hooks';

const avatarThemeMap = (theme: Theme) => ({
  borderRadius: theme.radii.xs,
  background: {
    default: theme.colors.navy[100],
    accent: theme.colors.blue[100],
  },
});

type ThemeMap = ReturnType<typeof avatarThemeMap>;

type AvatarProps = React.PropsWithChildren<{
  color?: 'default' | 'accent';
}>;

const AvatarBase = styled('div')<{
  $themeMap: ThemeMap;
  $color: AvatarProps['color'];
}>`
  box-sizing: border-box;
  padding: 0.25rem;
  border-radius: ${({ $themeMap }) => $themeMap.borderRadius};
  background-color: ${({ $themeMap, $color = 'default' }) =>
    $themeMap.background[$color]};
  line-height: 0;
`;

export const Avatar = ({ children, color, ...props }: AvatarProps) => {
  const themeMap = useComponentTheme(avatarThemeMap);

  return (
    <AvatarBase $themeMap={themeMap} $color={color} {...props}>
      {children}
    </AvatarBase>
  );
};
