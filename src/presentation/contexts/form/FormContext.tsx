import { createContext, useState } from 'react'

import type { IFormContextProps, IFormContextState } from './types'

export const FormContext = createContext({} as IFormContextProps)

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState<IFormContextState>({
    emailContent: '',
    emailErrorMessage: '',
    errorMessage: '',
    isLoading: false,
    passwordContent: '',
    passwordErrorMessage: ''
  })

  function setEmailContent(emailContent: string) {
    setFormState(oldState => ({
      ...oldState,
      emailContent
    }))
  }

  function setEmailErrorMessage(emailErrorMessage: string) {
    setFormState(oldState => ({
      ...oldState,
      emailErrorMessage
    }))
  }

  function setErrorMessage(errorMessage: string) {
    setFormState(oldState => ({
      ...oldState,
      errorMessage
    }))
  }

  function setIsLoading(isLoading: boolean) {
    setFormState(oldState => ({
      ...oldState,
      isLoading
    }))
  }

  function setPasswordContent(passwordContent: string) {
    setFormState(oldState => ({
      ...oldState,
      passwordContent
    }))
  }

  function setPasswordErrorMessage(passwordErrorMessage: string) {
    setFormState(oldState => ({
      ...oldState,
      passwordErrorMessage
    }))
  }

  return (
    <FormContext.Provider
      value={{
        formState,
        setEmailContent,
        setEmailErrorMessage,
        setErrorMessage,
        setIsLoading,
        setPasswordContent,
        setPasswordErrorMessage
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
