import type { FC, HTMLAttributes } from 'react'
import React from 'react'

import Styles from './SpinnerStyles.scss'

export const Spinner: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={`${Styles.spinner} ${className}`} {...props}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
