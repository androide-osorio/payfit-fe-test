import styled from "styled-components";
import { Theme } from "./ThemeProvider";

type BadgeProps = React.PropsWithChildren<{
	color: 'silver' | 'blue' | 'azure' | 'purple';
}>;

const getBadgeColors = (theme: Theme) => ({
	silver: theme.colors.silver[60],
	blue: theme.colors.blue[20],
	azure: theme.colors.azure[40],
	purple: theme.colors.purple[40],
});

const BadgeBase = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.0625rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${({ theme, color }) => getBadgeColors(theme)[color]};
  color: ${({ theme }) => theme.colors.navy[100]};
  ${({ theme }) => theme.typography.styles.label}
`;

export const Badge = (props: BadgeProps) => {
	const {
		color,
		children,
		...rest
	} = props;

	return (
		<BadgeBase color={color} {...rest}>{children}</BadgeBase>
	);
};