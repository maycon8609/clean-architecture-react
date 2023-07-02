import React from 'react'
import type { FC } from 'react'

import { Spinner } from '@presentation/components'

import Styles from './FormStatusStyles.scss'

export const FormStatus: FC = () => (
  <div className={Styles.errorWrap}>
    <Spinner className={Styles.spinner} />

    <span className={Styles.error}>Error</span>
  </div>
)

export default FormStatus
