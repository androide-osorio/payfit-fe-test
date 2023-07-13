import styled from "styled-components";

export const ContentBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.silver[60]};
  background-color: ${({ theme }) => theme.colors.common.white};
  box-shadow: ${({ theme }) => theme.shadows[100]};
`;
