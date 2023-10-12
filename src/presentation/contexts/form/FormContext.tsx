import React, { createContext, useState } from 'react'

import type { FormContextProps } from './types'

export const FormContext = createContext({} as FormContextProps)

export const FormProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  function handleSetErrorMessage(errorMessageState: string) {
    setErrorMessage(errorMessageState)
  }

  function handleSetIsLoading(isLoadingState: boolean) {
    setIsLoading(isLoadingState)
  }

  return (
    <FormContext.Provider
      value={{
        errorMessage,
        handleSetErrorMessage,
        handleSetIsLoading,
        isLoading
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
