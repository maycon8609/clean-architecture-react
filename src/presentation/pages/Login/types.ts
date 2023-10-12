import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export type LoginProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  'data-testid'?: string
}
