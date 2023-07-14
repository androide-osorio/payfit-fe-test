import styled from 'styled-components';
import { Card, Badge, Text, Skeleton } from '../../../components';
import { type CompanyWithSectors } from '../../../types';

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

const GridItemSkeleton = () => {
  return (
    <Card element="li">
      <Skeleton.Box
        style={{ height: '1.25rem', width: '8rem', marginBottom: '1.25rem' }}
      />
      <Skeleton.Box style={{ height: '5.25rem', marginBottom: '1.25rem' }} />
      <Skeleton.Text />
      <Skeleton.Text />
      <Skeleton.Text />
    </Card>
  );
}

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

type CompanyGridProps = {
  isLoading?: boolean;
  companies: CompanyWithSectors[];
};

export const CompanyGrid = ({ companies, isLoading }: CompanyGridProps) => {
  if (isLoading) {
    return (
      <ListContainer>
        {[...Array(10)].map((_, index) => (
          <GridItemSkeleton key={`company-skeleton-${index}`} />
        ))}
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {companies.map((company) => (
        <CompanyGridItem key={company.id} {...company} />
      ))}
    </ListContainer>
  );
};
