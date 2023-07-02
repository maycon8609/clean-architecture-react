import React, { memo } from 'react'
import type { FC } from 'react'

import { Logo } from '@presentation/components'

import Styles from './HeaderLoginStyles.scss'

export const HeaderLogin: FC = memo(() => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - enquetes para Programadores</h1>
  </header>
))

export default HeaderLogin
