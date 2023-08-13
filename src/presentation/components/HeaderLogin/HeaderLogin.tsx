import React, { memo } from 'react'
import type { FC } from 'react'

import type { HeaderLoginProps } from './types'

import { Logo } from '@presentation/components'

import Styles from './HeaderLoginStyles.scss'

export const HeaderLogin: FC<HeaderLoginProps> = memo(
  ({ 'data-testid': datatestId = 'header-login', ...props }) => (
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
