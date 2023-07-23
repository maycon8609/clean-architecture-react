import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeaderLoginProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  'data-testid'?: string
}
