import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';

import { ContentBlock, Layout, Text, Input } from "../../components";
import { MagnifyingGlass } from "../../components/icons";
import { CompanyGrid } from "./components/CompanyGrid";
import { getCompanies } from "../../shared/http";


export function CompaniesListing() {
  const { isLoading, error, data = [] } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const { total, results } = await getCompanies();
      return results;
    },
  });

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
        <CompanyGrid companies={data} />
      </ContentBlock>
    </Layout>
  );
}
