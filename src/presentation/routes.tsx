import { createBrowserRouter } from 'react-router-dom'

import { Login } from '@presentation/pages/Login'

import '@presentation/styles/global.scss'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
])
