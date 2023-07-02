import React from 'react'
import type { FC } from 'react'

import type { FieldProps } from './types'

import Styles from './FieldStyles.scss'

export const Field: FC<FieldProps> = props => (
  <div className={Styles.inputWrap}>
    <input {...props} />
    <span className={Styles.status}>🔴️</span>
  </div>
)

export default Field
