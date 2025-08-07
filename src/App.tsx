import './App.css'
import { createBrowserRouter } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard'
import Transactions from './pages/transactions/Transactions'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/transactions',
    element: <Transactions />
  },
])
