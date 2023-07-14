import styled from "styled-components";

import { type Theme } from "./ThemeProvider";

type TextProps = React.PropsWithChildren<{
	element?: keyof JSX.IntrinsicElements;
	variant?: keyof Theme["typography"]["styles"];
}>;

const variantElementMap = {
	h1Display: "h1",
	h2: "h2",
	body: "p",
	label: "label",
	caption: "p",
} as const

const StyledElement = styled.p<TextProps>`
	display: block;
	${({ theme, variant = 'body' }) => theme.typography.styles[variant!]}
`;

export const Text = ({ element, variant = "body", children, ...rest }: TextProps) => {
	const tag = element ?? variantElementMap[variant];

	return <StyledElement as={tag} variant={variant} {...rest}>
		{children}
	</StyledElement>;
}