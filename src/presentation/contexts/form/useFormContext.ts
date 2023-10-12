import { useContext } from 'react'

import type { FormContextProps } from './types'

import { FormContext } from './FormContext'

export const useFormContext: () => FormContextProps = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useForm deve ser usado dentro do FormProvider')
  }

  return context
}
