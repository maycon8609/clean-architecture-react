import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  'data-testid'?: string
}
