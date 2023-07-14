import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';

import { ContentBlock, Layout, Text, Input } from "../../components";
import { MagnifyingGlass } from "../../components/icons";
import { CompanyGrid } from "./components/CompanyGrid";
import { getCompanies, getSectors } from "../../shared/http";


export function CompaniesListing() {
  const { isLoading, error, data: companies = [] } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const { total, results } = await getCompanies();
      return results;
    },
  });
  const sectorIds = companies.map(
    (company) => company.sectors.map(sector => sector.sectorId)
  );
  const {
    isLoading: isLoading2,
    error: error2,
    data: sectors = [],
  } = useQuery({
    queryKey: ['sectors', sectorIds],
    queryFn: async () => {
      const { sectors } = await getSectors();
      return sectors;
    },
    // The query will not execute until the userId exists
    enabled: Boolean(sectorIds),
  });

  const companiesWithSectors = companies.map((company) => {
    const companySectors = company.sectors
    .map((sector) =>
      sectors.find((s) => s.id === sector.sectorId)
    )
    .filter(Boolean);

    return {
      ...company,
      sectors: companySectors,
    };
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
        <CompanyGrid companies={companiesWithSectors as any} />
      </ContentBlock>
    </Layout>
  );
}
