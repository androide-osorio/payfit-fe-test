import { NavLink, Outlet } from 'react-router-dom';
import { Divider, AddCircle, Company } from '@template/ui';

import {
  Main,
  Nav,
  GlobalStyles,
  NavLogo,
  NavItem,
  NavMenu,
} from './components';

export function Root() {
  return (
    <>
      <GlobalStyles />
      <Nav>
        <NavLink to="/">
          <NavLogo src="src/assets/payfit-logo.svg" alt="Payfit Logo" />
        </NavLink>
        <NavMenu>
          <NavItem to="/companies-listing" icon={<Company />}>
            Companies listing
          </NavItem>
          <NavItem to="/companies-creation" icon={<AddCircle />}>
            Add new company
          </NavItem>
        </NavMenu>
        <Divider />
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
