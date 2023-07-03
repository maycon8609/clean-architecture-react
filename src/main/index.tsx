import React, { StrictMode } from 'react'

import ReactDom from 'react-dom'
import { RouterProvider } from 'react-router-dom'

import { routes } from '@presentation/routes'

ReactDom.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
  document.getElementById('main')
)
