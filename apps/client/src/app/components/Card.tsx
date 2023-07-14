import React, { forwardRef } from 'react';
import styled from 'styled-components';

type CardProps = React.PropsWithChildren<{
  element?: keyof JSX.IntrinsicElements;
}>;

const StyledCard = styled.article`
	background-color: ${({ theme }) => theme.colors.common.white};
	border-radius: ${({ theme }) => theme.radii.sm};
	border: 1px solid ${({ theme }) => theme.colors.silver[60]};
	padding: 1.25rem;
	padding-block-end: 1.5rem;
	color: ${({ theme }) => theme.colors.navy[60]};
`;

export const Card = (props: CardProps) => {
	const {
		element = 'div',
		children,
		...rest
	} = props;

	return (
		<StyledCard as={element} {...rest}>
			{children}
		</StyledCard>
	);
};
