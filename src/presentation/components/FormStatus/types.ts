import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FormStatusProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  'data-testid'?: string
}
