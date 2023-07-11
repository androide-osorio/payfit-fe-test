import { RouterProvider } from 'react-router-dom'
import { router } from './shared/router'
import { ThemeProvider } from './components';

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
