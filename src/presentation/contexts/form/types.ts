import type { LoginFormState } from '@presentation/pages/Login'

export type FormContextProps = LoginFormState & {
  handleSetIsLoading: (isLoading: boolean) => void
}
