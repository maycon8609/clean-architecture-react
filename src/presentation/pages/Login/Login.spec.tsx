import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import type { FormContextProps } from '@presentation/contexts/form'

import type { LoginProps } from './types'

import { Login } from './Login'

const mockedUseFormContext: FormContextProps = {
  errorMessage: '',
  handleSetErrorMessage: jest.fn(),
  handleSetIsLoading: jest.fn(),
  isLoading: false
}

jest.mock('@presentation/contexts/form', () => ({
  useFormContext: () => mockedUseFormContext
}))

const makeSut = (
  props: Partial<LoginProps> = {}
): Omit<RenderOptions, 'wrapper'> => {
  const component = <Login {...props} />

  return render(component)
}

describe('Login', () => {
  it('should render the page', () => {
    makeSut()

    const container = screen.getByTestId('login--container')

    expect(container).toBeInTheDocument()
  })

  it('should contain the header text', () => {
    const label = '4Dev - enquetes para Programadores'
    makeSut()

    const headerLabel = screen.getByText(label)

    expect(headerLabel).toHaveTextContent(label)
  })

  it('should render the form', () => {
    makeSut()

    const formContainer = screen.getByTestId('login--form')

    expect(formContainer).toBeInTheDocument()
  })

  it('should render the email field', () => {
    makeSut()

    const fieldEmail = screen.getByTestId('login--field-email--container')

    expect(fieldEmail).toBeInTheDocument()
  })

  it('should render the password field', () => {
    makeSut()

    const fieldPassword = screen.getByTestId('login--field-password--container')

    expect(fieldPassword).toBeInTheDocument()
  })

  it('should render the enter button', () => {
    makeSut()

    const enterButton = screen.getByRole('button', { name: /Entrar/ })

    expect(enterButton).toBeInTheDocument()
  })

  it('should render the create account text', () => {
    makeSut()

    const createAccountSpan = screen.getByText('Criar conta')

    expect(createAccountSpan).toBeInTheDocument()
  })

  it('should initialize the login button disabled', () => {
    makeSut()

    const submitButton = screen.getByTestId('login--button-submit')

    expect(submitButton).toBeDisabled()
  })
})
