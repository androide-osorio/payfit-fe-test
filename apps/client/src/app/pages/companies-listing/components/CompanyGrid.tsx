import styled from 'styled-components';
import { Card, Badge } from '../../../components';

type Company = {
  id: string;
  name: string;
  description: string;
  sectors: string[];
};

type CompanyGridProps = {
  companies: Company[];
};

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.9rem, 1fr));
  gap: 1rem;
`;

const CompanyGridItem = ({
  id,
  name,
  description,
  sectors,
  ...rest
}: Company) => {
  return (
    <Card element="li" {...rest}>
      {sectors.map((sector) => (
        <Badge key={`company-${id}__sector-${sector}`} color="silver">
          {sector}
        </Badge>
      ))}
      <p>{description}</p>
    </Card>
  );
};

export const CompanyGrid = ({ companies }: CompanyGridProps) => {
  return (
    <ListContainer>
      {companies.map((company) => (
        <CompanyGridItem key={company.id} {...company} />
      ))}
    </ListContainer>
  );
};
