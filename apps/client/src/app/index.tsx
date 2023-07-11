import { RouterProvider } from 'react-router-dom'
import { router } from './shared/router'

export function App() {
  return <RouterProvider router={router} />
}
