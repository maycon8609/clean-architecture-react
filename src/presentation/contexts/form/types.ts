import type { FormStatusProps } from '@presentation/components/FormStatus'

export type FormContextProps = Pick<
  FormStatusProps,
  'errorMessage' | 'isLoading'
> & {
  handleSetErrorMessage: (errorMessageState: string) => void
  handleSetIsLoading: (isLoading: boolean) => void
}
