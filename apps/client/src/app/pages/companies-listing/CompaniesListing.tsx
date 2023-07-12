import styled from "styled-components";
import { Badge, Card } from "../../components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block-start: 3.5rem;
  padding-inline: 2rem;
  background-color: ${({ theme }) => theme.colors.silver[20]};
  height: 100vh;
`;

const H2 = styled.h2`
  ${({ theme }) => theme.typography.styles.h2}
  color: ${({ theme }) => theme.colors.navy[100]};
  margin: 0;
`;

const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.silver[60]};
  background-color: ${({ theme }) => theme.colors.common.white};
  box-shadow: ${({ theme }) => theme.shadows[100]};
`;

const CompaniesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.9rem, 1fr));
  gap: 1rem;
`;

export function CompaniesListing() {
  return (
    <Container>
      <H2>Companies listing</H2>
      <ListingsContainer>
        <div>Textfield here</div>
        <CompaniesList>
          <Card element="li">
            <Badge color="silver">Biotechnology</Badge>
            Company 1
          </Card>
          <Card element="li">
            <Badge color="blue">Environmental Technologies</Badge>
            Company 2
          </Card>
          <Card element="li">
            <Badge color="azure">Manufacturing</Badge>
            Company 3
          </Card>
          <Card element="li">
            <Badge color="purple">Information Technology</Badge>
            Company 4
          </Card>
        </CompaniesList>
      </ListingsContainer>
    </Container>
  );
}
