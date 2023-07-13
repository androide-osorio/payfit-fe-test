import styled from "styled-components";
import { ContentBlock, Layout, Text, Input, Select, TextArea } from "../../components";
import { MagnifyingGlass, Unfold } from "../../components/icons";
import { CompanyGrid } from "./components/CompanyGrid";

const H2 = styled.h2`
  ${({ theme }) => theme.typography.styles.h2}
  color: ${({ theme }) => theme.colors.navy[100]};
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
      <ContentBlock>
        <Input
          type="search"
          label="Company name"
          placeholder="Use this field to search companies by name"
          leftElement={<MagnifyingGlass />}
        />
        <Select
          label="Company name"
          placeholder="Enter something..."
          leftElement={<MagnifyingGlass />}
        >
          <option value="1"> bla</option>
          <option value="2"> bleh</option>
          <option value="3"> bli</option>
        </Select>
        <TextArea
          label="Free Text"
          placeholder="Enter something..."
        />
        <CompanyGrid companies={dummyCompanies} />
      </ContentBlock>
    </Layout>
  );
}
