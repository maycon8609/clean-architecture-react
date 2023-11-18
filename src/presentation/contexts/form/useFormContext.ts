import { useContext } from 'react'

import type { IFormContextProps } from './types'

import { FormContext } from './FormContext'

export const useFormContext: () => IFormContextProps = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useForm deve ser usado dentro do FormProvider')
  }

  return context
}
