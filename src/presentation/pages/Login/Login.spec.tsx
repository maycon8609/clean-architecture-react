import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import type { FormContextProps } from '@presentation/contexts'

import type { LoginProps } from './types'

import { Login } from './Login'

const mockedUseFormContext: FormContextProps = {
  handleSetIsLoading: jest.fn(),
  isLoading: false
}

jest.mock('@presentation/contexts', () => ({
  useFormContext: () => mockedUseFormContext
}))

const makeSut = (
  props: Partial<LoginProps>
): Omit<RenderOptions, 'wrapper'> => {
  const component = <Login {...props} />

  return render(component)
}

describe('Login', () => {
  it('should display the spinner if isLoading is true', () => {
    mockedUseFormContext.isLoading = true
    makeSut({})

    const spinner = screen.queryByTestId(
      'login--form-status--spinner--container'
    )

    expect(spinner).toBeInTheDocument()
    expect(spinner).toBeVisible()
  })

  it('should hide the spinner if isLoading is false', () => {
    mockedUseFormContext.isLoading = false
    makeSut({})

    const spinner = screen.queryByTestId(
      'login--form-status--spinner--container'
    )

    expect(spinner).not.toBeInTheDocument()
  })
})
