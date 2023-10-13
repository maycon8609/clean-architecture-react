export type FormContextProps = {
  emailErrorMessage?: string
  errorMessage?: string
  isLoading?: boolean
  onSetEmailErrorMessage: (emailErrorMessageState: string) => void
  onSetErrorMessage: (errorMessageState: string) => void
  onSetIsLoading: (isLoading: boolean) => void
  onSetPasswordErrorMessage: (passwordErrorMessageState: string) => void
  passwordErrorMessage?: string
}
