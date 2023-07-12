import styled from "styled-components";
import { Badge, Card } from "../../components";
import { CompanyGrid } from "./components/CompanyGrid";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block-start: 3.5rem;
  padding-inline: 2rem;
  background-color: ${({ theme }) => theme.colors.silver[20]};
  height: 100vh;
`;

const H2 = styled.h2`
  ${({ theme }) => theme.typography.styles.h2}
  color: ${({ theme }) => theme.colors.navy[100]};
  margin: 0;
`;

const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.silver[60]};
  background-color: ${({ theme }) => theme.colors.common.white};
  box-shadow: ${({ theme }) => theme.shadows[100]};
`;

export function CompaniesListing() {
  const dummyCompanies = [
    {
      id: '1',
      name: 'Company 1',
      description: 'Company 1 description',
      sectors: ['Biotechnology'],
    },
    {
      id: '2',
      name: 'Company 2',
      description: 'Company 2 description',
      sectors: ['Environmental Technologies'],
    },
    {
      id: '3',
      name: 'Company 3',
      description: 'Company 3 description',
      sectors: ['Manufacturing'],
    },
    {
      id: '4',
      name: 'Company 4',
      description: 'Company 4 description',
      sectors: ['Information Technologies'],
    },
  ];

  return (
    <Container>
      <H2>Companies listing</H2>
      <ListingsContainer>
        <div>Textfield here</div>
        <CompanyGrid companies={dummyCompanies} />
      </ListingsContainer>
    </Container>
  );
}
