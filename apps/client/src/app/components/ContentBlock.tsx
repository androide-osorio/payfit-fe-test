import styled from "styled-components";

type Props = React.PropsWithChildren<{
  element?: keyof JSX.IntrinsicElements;
}>;

export const ContentBlock = ({ element = 'section', ...props }: Props) => {
  const Element = styled(element)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1.5rem;
    border-radius: ${({ theme }) => theme.radii.sm};
    border: 1px solid ${({ theme }) => theme.colors.silver[60]};
    background-color: ${({ theme }) => theme.colors.common.white};
    box-shadow: ${({ theme }) => theme.shadows[100]};
  `;

  return <Element {...props} />;
}
