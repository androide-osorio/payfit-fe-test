import React from 'react';
import styled from 'styled-components';

export type EmptyStateProps = {
	heading: string;
	image: string;
};

const EmptyStateTitle = styled.h1`
	${({ theme }) => theme.typography.styles.h1Display};
	color: ${({ theme }) => theme.colors.navy[200]};
`

const EmptyStateBase = styled('section')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const EmptyState = ({ heading, image }: EmptyStateProps) => {
	return (
		<EmptyStateBase>
			<EmptyStateTitle>{heading}</EmptyStateTitle>
			<img src={image} alt={heading} />
		</EmptyStateBase>
	);
};
