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
} as const

export const Text = ({ element, variant = "body", children, ...rest }: TextProps) => {
	const Element = element ?? variantElementMap[variant];
	const StyledElement = styled(Element)`
		${({ theme }) => theme.typography.styles[variant]}
	`;
	return <StyledElement {...rest}>{children}</StyledElement>;
}