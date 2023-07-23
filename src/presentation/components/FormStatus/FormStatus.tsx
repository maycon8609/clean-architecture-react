import React from 'react'
import type { FC } from 'react'

import type { FormStatusProps } from './types'

import { Spinner } from '@presentation/components'

import Styles from './FormStatusStyles.scss'

export const FormStatus: FC<FormStatusProps> = ({
  'data-testid': datatestId = 'form-status',
  ...props
}) => (
  <div
    className={Styles.errorWrap}
    data-testid={`${datatestId}--container`}
    {...props}
  >
    <Spinner
      className={Styles.spinner}
      data-testid={`${datatestId}--spinner`}
    />

    <span className={Styles.error} data-testid={`${datatestId}--error`}>
      Error
    </span>
  </div>
)

export default FormStatus
