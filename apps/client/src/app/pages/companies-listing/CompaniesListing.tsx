import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';

import { ContentBlock, Layout, Text, Input } from "../../components";
import { MagnifyingGlass } from "../../components/icons";
import { CompanyGrid } from "./components/CompanyGrid";
import { getCompanies } from "../../shared/http";


export function CompaniesListing() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies()
  });

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
      <ContentBlock>
        <Input
          type="search"
          label="Company name"
          placeholder="Use this field to search companies by name"
          leftElement={<MagnifyingGlass />}
        />
        <CompanyGrid companies={dummyCompanies} />
      </ContentBlock>
    </Layout>
  );
}
