import styled from "styled-components";
import { Layout, Text } from "../../components";
import { CompanyGrid } from "./components/CompanyGrid";

const H2 = styled.h2`
  ${({ theme }) => theme.typography.styles.h2}
  color: ${({ theme }) => theme.colors.navy[100]};
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
    <Layout>
      <Text variant="h2">Companies listing</Text>
      <ListingsContainer>
        <div>Textfield here</div>
        <CompanyGrid companies={dummyCompanies} />
      </ListingsContainer>
    </Layout>
  );
}
