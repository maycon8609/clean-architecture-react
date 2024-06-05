import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export type LogoProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  'data-testid'?: string
}
