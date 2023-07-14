import styled from "styled-components";

export const Divider = styled.hr `
	border: none;
	height: 1px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.navy[90]};
	margin-block: 0 1rem;
`;