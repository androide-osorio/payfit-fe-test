import { useQuery, useMutation } from '@tanstack/react-query';
import {
  Button,
  ContentBlock,
  Input,
  Layout,
  Select,
  Spinner,
  Text,
  TextArea,
} from '../../components';
import { createCompany, getSectors } from '../../shared/http';

type CompanyDto = Parameters<typeof createCompany>[0];

export function CompaniesCreation() {
  const {
    isLoading,
    error,
    data: sectors = [],
  } = useQuery({
    queryKey: ['sectors'],
    queryFn: async () => {
      const { sectors } = await getSectors();
      return sectors;
    },
  });

  const mutation = useMutation({
    mutationFn: (newCompany: CompanyDto) => {
      return createCompany(newCompany);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    mutation.mutate({
      name: formValues.get('name') as string,
      description: formValues.get('description') as string,
      sectorIds: [formValues.get('sectorIds') as string],
      banner: formValues.get('banner') as string,
    });
  };

  return (
    <Layout>
      <Text variant="h2">Add new company</Text>
      <ContentBlock
        element="form"
        onSubmit={handleSubmit}
        style={{ width: '30rem' }}
      >
        <Input
          type="text"
          name="name"
          label="Company name"
          placeholder="Enter something..."
          minlength={2}
        />
        <TextArea
          label="Company description"
          name="description"
          placeholder="Enter something..."
          minlength={10}
        />
        <Select
          label="Company sector"
          name="sectorIds"
          placeholder="Enter something..."
        >
          {sectors.map((sector) => (
            <option key={sector.id} value={sector.id}>
              {sector.name}
            </option>
          ))}
        </Select>
        <Input
          type="url"
          name="banner"
          label="Company banner"
          placeholder="Enter something..."
        />
        <Button type="submit">
          {mutation.isLoading ? <Spinner size={20} /> : 'Submit'}
        </Button>
      </ContentBlock>
    </Layout>
  );
}
