import { memo } from 'react'
import type { FC } from 'react'

import type { HeaderProps } from './types'

import { Logo } from '@presentation/components/Logo'

import Styles from './HeaderStyles.scss'

export const Header: FC<HeaderProps> = memo(
  ({ 'data-testid': datatestId = 'header', label, ...props }) => (
    <header
      className={Styles.header}
      data-testid={`${datatestId}--container`}
      {...props}
    >
      <Logo data-testid={`${datatestId}--logo`} />
      <h1 data-testid={`${datatestId}--label`}>{label}</h1>
    </header>
  )
)
