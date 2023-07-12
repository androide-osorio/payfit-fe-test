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

const BadgeBase = styled.span`
  display: inline-block;
  padding: 0.0625rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.navy[100]};
  ${({ theme }) => theme.typography.styles[100]}
`;

export const Badge = (props: BadgeProps) => {
	const {
		color,
		children,
		...rest
	} = props;

	const StyledBadge = styled(BadgeBase)`
		background-color: ${({ theme }) => getBadgeColors(theme)[color]};
	`;

	return (
		<StyledBadge {...rest}>{children}</StyledBadge>
	);
};