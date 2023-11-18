export type IFormContextState = {
  emailContent?: string
  emailErrorMessage?: string
  errorMessage?: string
  isLoading?: boolean
  passwordContent?: string
  passwordErrorMessage?: string
}

export type IFormContextProps = {
  formState: IFormContextState
  setEmailContent: (emailContent: string) => void
  setEmailErrorMessage: (emailErrorMessage: string) => void
  setErrorMessage: (errorMessage: string) => void
  setIsLoading: (isLoading: boolean) => void
  setPasswordContent: (passwordContent: string) => void
  setPasswordErrorMessage: (passwordErrorMessage: string) => void
}
