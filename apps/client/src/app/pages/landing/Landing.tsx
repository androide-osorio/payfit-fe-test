import styled from "styled-components";
import { EmptyState } from "../../components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export function Landing() {
  return (
    <Container>
      <EmptyState
        heading="Welcome to PayFit!"
        image="src/assets/welcome-to-payfit.svg"
      />
    </Container>
  );
}
