import styled from 'styled-components';
import { Card, Badge, Text, Skeleton } from '../../../components';
import { type CompanyWithSectors } from '../../../types';

const ListContainer = styled.ul`
  /**
   * User input values.
   */
  --grid-layout-gap: 1rem;
  --grid-column-count: 4; /* This gets overridden by an inline style. */
  --grid-item--min-width: 12.9rem; /* This gets overridden by an inline style. */

  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  gap: var(--grid-layout-gap);
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
  min-height: 5.25rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledCard = styled(Card)`
  max-width: 100%;
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
    <StyledCard element="li" {...rest}>
      {sectors.map((sector) => (
        <Badge key={`company-${id}__sector-${sector.id}`} color="silver">
          {sector.name}
        </Badge>
      ))}
      <CompanyBanner>
        <img src={banner} alt={name} />
      </CompanyBanner>
      <Text variant="caption">{description}</Text>
    </StyledCard>
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
