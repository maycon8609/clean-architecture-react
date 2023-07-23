import React, { memo } from 'react'
import type { FC } from 'react'

import type { FooterProps } from './types'

import Styles from './FooterStyles.scss'

export const Footer: FC<FooterProps> = memo(
  ({ 'data-testid': datatestId = 'footer', ...props }) => (
    <footer className={Styles.footer} data-testid={datatestId} {...props} />
  )
)

export default Footer
