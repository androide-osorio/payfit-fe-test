import styled from 'styled-components';

export const Button = styled.button`
	appearance: none;
	border: none;
  border-radius: ${({ theme }) => theme.radii.xs};
  background: ${({ theme }) => theme.colors.blue[100]};
  box-shadow: ${({ theme }) => theme.shadows[100]};
	color: ${({ theme }) => theme.colors.common.white};
	padding: 0.5em 0.75em;
	display: inline-block;
	cursor: pointer;
	${({ theme }) => theme.typography.styles.label};
`;
