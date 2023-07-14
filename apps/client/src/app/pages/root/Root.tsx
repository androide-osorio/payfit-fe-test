import { Outlet } from 'react-router-dom'
import { Main, Nav, GlobalStyles, NavLogo, NavItem, NavMenu } from './components'
import { Avatar } from '../../components'
import { AddCircle, Company } from '../../components/icons';

/**
 *
 */
export function Root() {
  return (
    <>
      <GlobalStyles />
      <Nav>
        <a href="/">
          <NavLogo src="src/assets/payfit-logo.svg" alt="Payfit Logo" />
        </a>
        <NavMenu>
          <NavItem to="/companies-listing" icon={<Company />}>
            Companies listing
          </NavItem>
          <NavItem to="/companies-creation" icon={<AddCircle />}>
            Add new company
          </NavItem>
        </NavMenu>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
