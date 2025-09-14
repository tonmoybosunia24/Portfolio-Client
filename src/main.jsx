import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'
import Routes from './Routes/Routes.jsx'
import GlobalProviders from './GlobalProviders/GlobalProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProviders>
      <RouterProvider router={Routes}></RouterProvider>
    </GlobalProviders>
  </StrictMode>,
)