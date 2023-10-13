import type { FC } from 'react'

import type { FieldProps } from './types'

import Styles from './FieldStyles.scss'

export const Field: FC<FieldProps> = ({
  'data-testid': datatestId = 'field',
  errorMessage,
  ...props
}) => (
  <div className={Styles.inputWrap} data-testid={`${datatestId}--container`}>
    <input data-testid={`${datatestId}--input`} {...props} />
    <span
      className={Styles.status}
      data-testid={`${datatestId}--status`}
      title={errorMessage}
    >
      🔴️
    </span>
  </div>
)
