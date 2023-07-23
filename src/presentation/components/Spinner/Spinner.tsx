import React from 'react'
import type { FC } from 'react'

import type { SpinnerProps } from './types'

import Styles from './SpinnerStyles.scss'

export const Spinner: FC<SpinnerProps> = ({
  className,
  'data-testid': datatestId = 'spinner',
  ...props
}) => {
  return (
    <div
      className={`${Styles.spinner} ${className}`}
      data-testid={`${datatestId}--container`}
      {...props}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
