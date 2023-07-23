import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type FieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  'data-testid'?: string
}
