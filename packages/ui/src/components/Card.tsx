import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Theme } from '../themes';
import { useComponentTheme } from '../hooks';

type CardProps = React.PropsWithChildren<{
  element?: keyof JSX.IntrinsicElements;
}>;

const cardThemeMap = (theme: Theme) => ({
  borderRadius: theme.radii.sm,
  borderColor: theme.colors.silver[60],
  backgroundColor: theme.colors.common.white,
  textColor: theme.colors.navy[60],
});

type ThemeMap = ReturnType<typeof cardThemeMap>;

const StyledCard = styled.article<{ $themeMap: ThemeMap}>`
  background-color: ${({ $themeMap }) => $themeMap.backgroundColor};
  border-radius: ${({ $themeMap }) => $themeMap.borderRadius};
  border: 1px solid ${({ $themeMap }) => $themeMap.borderColor};
  color: ${({ $themeMap }) => $themeMap.textColor};
  padding: 1.25rem;
  padding-block-end: 1.5rem;
`;

export const Card = (props: CardProps) => {
  const { element = 'div', children, ...rest } = props;
  const themeMap = useComponentTheme(cardThemeMap);
  return (
    <StyledCard as={element} $themeMap={themeMap} {...rest}>
      {children}
    </StyledCard>
  );
};
