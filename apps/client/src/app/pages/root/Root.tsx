import { Outlet } from 'react-router-dom'
import { Main, Nav, GlobalStyles } from './components'

/**
 *
 */
export function Root() {
  return (
    <>
      <GlobalStyles />
      <Nav>Links come here</Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}
