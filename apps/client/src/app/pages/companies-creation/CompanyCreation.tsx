import { useMutation, useQuery } from '@tanstack/react-query';
import {
  Alert,
  Button,
  Input,
  Select,
  Spinner,
  Text,
  TextArea,
} from '@template/ui';
import styled from 'styled-components';

import {
  ContentBlock,
  Layout,
} from '../../components';
import { createCompany, getSectors } from '../../shared/http';

const FormContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

type CompanyDto = Parameters<typeof createCompany>[0];

export function CompaniesCreation() {
  const { data: sectors = [] } = useQuery({
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

  const showAlert = mutation.isSuccess || mutation.isError;
  const alertVariant = mutation.isSuccess
    ? 'success'
    : mutation.isError
    ? 'danger'
    : 'primary';

  return (
    <Layout>
      <Text variant="h2">Add new company</Text>
      <FormContainer>
        {showAlert && (
          <Alert variant={alertVariant}>
            {mutation.isSuccess
              ? 'Company created successfully!'
              : 'Could not create company. Please check the form and try again.'}
          </Alert>
        )}
        <ContentBlock>
          <form onSubmit={handleSubmit}>
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
            <Button type="submit" style={{ alignSelf: 'flex-start' }}>
              {mutation.isLoading ? <Spinner size={20} /> : 'Submit'}
            </Button>
          </form>
        </ContentBlock>
      </FormContainer>
    </Layout>
  );
}
