import React, { useContext, useId } from 'react';
import styled from 'styled-components';

export const Nav = styled('nav')`
  width: 300px;
  height: 100%;
  background-color: #042040;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
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

const NavMenuContext = React.createContext<NavMenuContextType>({});

export const NavMenu = ({ children }: NavMenuProps) => {
  const [activeItem, setActiveItem] = React.useState<string>();

  const contextValue = {
    activeItem,
    setActiveItem,
  };

  const MenuBase = styled('ul')`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  `

  return (
    <NavMenuContext.Provider value={contextValue}>
      <MenuBase>{children}</MenuBase>
    </NavMenuContext.Provider>
  );
};

type NavItemProps = React.PropsWithChildren<{
  href: string;
}>;

export const NavItem = ({ children, ...props }: NavItemProps) => {
  const id = useId();
  const { activeItem, setActiveItem } = useContext(NavMenuContext);

  const handleClick = () => {
    setActiveItem?.(id as string);
  };

  const Link = styled('a')<{ active?: boolean }>`
    ${({theme}) => theme.typography.styles[200]}
    color: ${({active, theme: {colors}}) => active ? colors.common.white : colors.silver[20]};
    text-decoration: none;
    cursor: pointer;
  `;
  return (
    <li>
      <Link {...props} onClick={handleClick} active={activeItem === id}>
        {children}
      </Link>
    </li>
  );
};
