import { Outlet } from 'react-router-dom'
import { Main, Nav, GlobalStyles, NavLogo, NavItem, NavMenu } from './components'
import { Avatar } from '../../components/Avatar/Avatar'

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
          <NavItem href="/">
            <Avatar>DD</Avatar>
            Companies listing
          </NavItem>
          <NavItem href="/about">
            <Avatar color="accent">DD</Avatar>
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
