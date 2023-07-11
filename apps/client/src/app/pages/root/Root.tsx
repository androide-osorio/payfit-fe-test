import { Outlet } from 'react-router-dom'
import { Main, Nav, GlobalStyles, NavLogo, NavItem, NavMenu } from './components'

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
          <NavItem href="/">Companies listing</NavItem>
          <NavItem href="/about">Add new company</NavItem>
        </NavMenu>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}
