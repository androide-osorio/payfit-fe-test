import React from 'react';
import styled from 'styled-components';

export type EmptyStateProps = {
	heading: string;
	image: string;
};

const EmptyStateBase = styled('section')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const EmptyState = ({ heading, image }: EmptyStateProps) => {
	return (
		<EmptyStateBase>
			<h1>{heading}</h1>
			<img src={image} alt={heading} />
		</EmptyStateBase>
	);
};
