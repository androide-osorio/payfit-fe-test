import React, { useContext, useId } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { Avatar, Theme } from '../../../components';
import {
  NavLink,
  NavLinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

export const Nav = styled('nav')`
  width: 300px;
  background-color: #042040;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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

type NavMenuProps = React.PropsWithChildren<{}>;
type NavMenuContextType = {
  activeItem?: string;
  setActiveItem?: (item: string) => void;
};

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

export const NavMenu = ({ children }: NavMenuProps) => {
  return (
    <>
      <MenuBase>{children}</MenuBase>
    </>
  );
};

type NavItemProps = Omit<NavLinkProps, 'children'> &
  React.PropsWithChildren<{
    icon?: React.ReactNode;
  }>;

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
