import type { State } from '@presentation/pages'

export type FormContextProps = State & {
  handleSetIsLoading?: (isLoading: boolean) => void
}
