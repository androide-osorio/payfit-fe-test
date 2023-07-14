import { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { ContentBlock, Input, Layout, Text } from '../../components';
import { MagnifyingGlass } from '../../components/icons';
import { useCompanyWithSectorsQuery } from '../../hooks/useCompanyWithSectorsQuery';
import { CompanyGrid } from './components/CompanyGrid';

export function CompaniesListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    isLoading,
    error,
    data: companies = [],
  } = useCompanyWithSectorsQuery();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value:', event.target.value)
    setSearchQuery(event.target.value);
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
