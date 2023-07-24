import React, { createContext, useState } from 'react'

import type { FormContextProps } from './types'

export const FormContext = createContext<FormContextProps>({
  isLoading: false
})

export const FormProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  function handleSetIsLoading(isLoadingState: boolean) {
    setIsLoading(isLoadingState)
  }

  return (
    <FormContext.Provider value={{ isLoading, handleSetIsLoading }}>
      {children}
    </FormContext.Provider>
  )
}
