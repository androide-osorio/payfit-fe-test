import styled from 'styled-components';
import { Card, Badge, Text } from '../../../components';
import { type CompanyWithSectors } from '../../../types';

type CompanyGridProps = {
  companies: CompanyWithSectors[];
};

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.9rem, 1fr));
  gap: 1rem;
`;

const CompanyBanner = styled.figure`
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.silver[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 174 / 84;
  margin-block-start: 1.25rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CompanyGridItem = ({
  id,
  name,
  description,
  banner,
  sectors,
  ...rest
}: CompanyWithSectors) => {
  return (
    <Card element="li" {...rest}>
      {sectors.map((sector) => (
        <Badge key={`company-${id}__sector-${sector.id}`} color="silver">
          {sector.name}
        </Badge>
      ))}
      <CompanyBanner>
        <img src={banner} alt={name} />
      </CompanyBanner>
      <Text variant="body">{description}</Text>
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
