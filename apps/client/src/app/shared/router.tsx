import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Root } from '../pages/root'
import { Landing } from '../pages/landing'
import { CompaniesListing } from '../pages/companies-listing'
import { CompaniesCreation } from '../pages/companies-creation'
/**
 * Docs:
 * https://reactrouter.com/en/main/routers/create-browser-router
 * https://reactrouter.com/en/main/utils/create-routes-from-elements
 */
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Landing />} />
      <Route path='companies-listing' element={<CompaniesListing />} />
      <Route path='companies-creation' element={<CompaniesCreation />} />
    </Route>
  )
)
