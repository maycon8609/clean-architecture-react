import React, { memo } from 'react'
import type { FC } from 'react'

import type { HeaderProps } from './types'

import { Logo } from '@presentation/components'

import Styles from './HeaderStyles.scss'

export const Header: FC<HeaderProps> = memo(
  ({ 'data-testid': datatestId = 'header', ...props }) => (
    <header
      className={Styles.header}
      data-testid={`${datatestId}--container`}
      {...props}
    >
      <Logo data-testid={`${datatestId}--logo`} />
      <h1 data-testid={`${datatestId}--label`}>
        4Dev - enquetes para Programadores
      </h1>
    </header>
  )
)
