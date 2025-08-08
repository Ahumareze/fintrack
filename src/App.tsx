import './App.css'
import { createBrowserRouter } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard'
import ConstructionPage from './pages/ConstructionPage'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/transactions',
    element: <ConstructionPage />
  },
  {
    path: '/settings',
    element: <ConstructionPage />
  },
  {
    path: '/reports',
    element: <ConstructionPage />
  },
])
