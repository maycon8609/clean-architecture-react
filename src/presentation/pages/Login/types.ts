import type { DetailedHTMLProps, HTMLAttributes } from 'react'

import type { IValidation } from '@presentation/protocols/validation'

export type LoginProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  'data-testid'?: string
  validation: IValidation
}
