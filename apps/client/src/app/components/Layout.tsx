import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block: 3.5rem;
  padding-inline: 2rem;
  background-color: ${({ theme }) => theme.colors.silver[20]};
  min-height: 100vh;
`;
