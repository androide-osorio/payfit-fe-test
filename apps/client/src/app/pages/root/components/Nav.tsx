import { Avatar } from '@template/ui';
import React from 'react';
import {
  NavLink,
  NavLinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled('nav')`
  width: 300px;
  background-color: ${({ theme }) => theme.colors.navy[200]};
  border-top-right-radius: ${({ theme }) => theme.radii.sm};
  border-bottom-right-radius: ${({ theme }) => theme.radii.sm};
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  flex: 0 0 300px;
`;
export const NavLogo = styled('img')`
  width: max-content;
  height: 1.75rem;
`;

const MenuBase = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const LinkContainer = styled.li<{ $isActive: boolean }>`
  position: relative;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.common.white : theme.colors.silver[300]};
  ${({ theme }) => theme.typography.styles[200]}

  &::before {
    content: '';
    position: absolute;

    ${({ $isActive, theme }) => css`
      width: 4px;
      height: 100%;
      left: -1rem;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: ${$isActive ? theme.colors.blue[100] : 'transparent'};
      box-shadow: 2px 0 4px ${$isActive ? 'rgba(15, 111, 222, 0.7)' : 'transparent'};
    `}
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 2.5rem;

  &:visited {
    color: inherit;
  }
`;

type NavMenuProps = React.PropsWithChildren<{}>;

type NavItemProps = Omit<NavLinkProps, 'children'> &
  React.PropsWithChildren<{
    icon?: React.ReactNode;
  }>;

export const NavMenu = ({ children }: NavMenuProps) => {
  return (
    <>
      <MenuBase>{children}</MenuBase>
    </>
  );
};

export const NavItem = ({ children, icon, to, ...props }: NavItemProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const isActive = Boolean(match);
  const avatarBgColor = isActive ? 'accent' : 'default';
  return (
    <LinkContainer $isActive={isActive}>
      <StyledNavLink to={to} {...props}>
        {icon && <Avatar color={avatarBgColor}>{icon}</Avatar>}
        {children}
      </StyledNavLink>
    </LinkContainer>
  );
};
