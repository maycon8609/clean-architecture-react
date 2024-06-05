import type { FC } from 'react'

import type { FormStatusProps } from './types'

import { Spinner } from '@presentation/components/Spinner'

import Styles from './FormStatusStyles.scss'

export const FormStatus: FC<FormStatusProps> = ({
  'data-testid': datatestId = 'form-status',
  errorMessage,
  isLoading = false,
  ...props
}) => (
  <div
    className={Styles.errorWrap}
    data-testid={`${datatestId}--container`}
    {...props}
  >
    {isLoading && (
      <Spinner
        className={Styles.spinner}
        data-testid={`${datatestId}--spinner`}
      />
    )}

    {errorMessage && (
      <span className={Styles.error} data-testid={`${datatestId}--error`}>
        {errorMessage}
      </span>
    )}
  </div>
)
