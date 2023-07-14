import { Text } from "@template/ui";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const EmptyState = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Landing() {
  return (
    <Container>
      <EmptyState>
        <Text variant="h1Display">Welcome to PayFit</Text>
        <img src="src/assets/welcome-to-payfit.svg" alt="Welcome to PayFit" />
      </EmptyState>
    </Container>
  );
}
