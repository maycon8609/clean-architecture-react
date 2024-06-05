import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  'data-testid'?: string
  label?: string
}
