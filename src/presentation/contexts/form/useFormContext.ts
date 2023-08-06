import { useContext } from 'react'

import { FormContext } from './FormContext'

import type { FormContextProps } from '..'

export const useFormContext: () => FormContextProps = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useForm deve ser usado dentro do ThemeProvider')
  }

  return context
}
