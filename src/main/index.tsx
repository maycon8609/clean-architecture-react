import React, { StrictMode } from 'react'

import ReactDom from 'react-dom'
import { RouterProvider } from 'react-router-dom'

import { FormProvider } from '@presentation/contexts/form'
import { routes } from '@presentation/routes'

ReactDom.render(
  <StrictMode>
    <FormProvider>
      <RouterProvider router={routes} />
    </FormProvider>
  </StrictMode>,
  document.getElementById('main')
)
