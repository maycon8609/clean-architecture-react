import React, { createContext, useState } from 'react'

import type { FormContextProps } from './types'

export const FormContext = createContext({} as FormContextProps)

export const FormProvider = ({ children }) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  function onSetEmailErrorMessage(emailErrorMessageState: string) {
    setEmailErrorMessage(emailErrorMessageState)
  }

  function onSetErrorMessage(errorMessageState: string) {
    setErrorMessage(errorMessageState)
  }

  function onSetIsLoading(isLoadingState: boolean) {
    setIsLoading(isLoadingState)
  }

  function onSetPasswordErrorMessage(passwordErrorMessageState: string) {
    setPasswordErrorMessage(passwordErrorMessageState)
  }

  return (
    <FormContext.Provider
      value={{
        emailErrorMessage,
        errorMessage,
        isLoading,
        onSetEmailErrorMessage,
        onSetErrorMessage,
        onSetIsLoading,
        onSetPasswordErrorMessage,
        passwordErrorMessage
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
