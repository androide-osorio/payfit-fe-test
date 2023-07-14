import { useMemo, useState } from 'react';

import { ContentBlock, Input, Layout, Text } from '../../components';
import { MagnifyingGlass } from '../../components/icons';
import { useCompanyWithSectorsQuery } from '../../hooks/useCompanyWithSectorsQuery';
import { CompanyGrid } from './components/CompanyGrid';
import { CompanyWithSectors } from '../../types';

export function CompaniesListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    isLoading,
    error,
    data: companies = [],
  } = useCompanyWithSectorsQuery();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredCompanies = useMemo(() => {
    const matchesCompanyName = (company: CompanyWithSectors) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase());
    return companies.filter(matchesCompanyName)
  }, [searchQuery, companies]);

  return (
    <Layout>
      <Text variant="h2">Companies listing</Text>
      <ContentBlock>
        <Input
          type="text"
          label="Company name"
          value={searchQuery}
          placeholder="Use this field to search companies by name"
          leftElement={<MagnifyingGlass />}
          onChange={handleSearch}
        />
        <CompanyGrid isLoading={isLoading} companies={filteredCompanies} />
      </ContentBlock>
    </Layout>
  );
}
