import { ContentBlock, Input, Layout, Text } from '../../components';
import { MagnifyingGlass } from '../../components/icons';
import { useCompanyWithSectorsQuery } from '../../hooks/useCompanyWithSectorsQuery';
import { CompanyGrid } from './components/CompanyGrid';

export function CompaniesListing() {
  const {
    isLoading,
    error,
    data: companies = [],
  } = useCompanyWithSectorsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        <CompanyGrid companies={companies} />
      </ContentBlock>
    </Layout>
  );
}
