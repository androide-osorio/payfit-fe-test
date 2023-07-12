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
        <NavLogo src="src/assets/payfit-logo.png" alt="Payfit Logo" />
        <NavMenu>
          <NavItem href="/companies-listing">
            <Avatar><Company /></Avatar>
            Companies listing
          </NavItem>
          <NavItem href="/companies-creation">
            <Avatar color="accent"><AddCircle /></Avatar>
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
