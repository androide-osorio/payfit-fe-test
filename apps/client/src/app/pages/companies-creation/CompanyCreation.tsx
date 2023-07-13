import { Button, ContentBlock, Input, Layout, Select, Text, TextArea } from "../../components";

export function CompaniesCreation() {
  return (
    <Layout>
      <Text variant="h2">Add new company</Text>
      <ContentBlock style={{ width: '30rem' }}>
        <Input
          type="text"
          label="Company name"
          placeholder="Enter something..."
        />
        <TextArea
          label="Company description"
          placeholder="Enter something..."
        />
        <Select label="Company sector" placeholder="Enter something...">
          <option value="1"> bla</option>
          <option value="2"> bleh</option>
          <option value="3"> bli</option>
        </Select>
        <Input
          type="url"
          label="Company banner"
          placeholder="Enter something..."
        />
        <Button type="submit">Submit</Button>
      </ContentBlock>
    </Layout>
  );
}
