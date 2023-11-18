import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import type { IFormContextProps } from '@presentation/contexts/form'
import type { IValidation } from '@presentation/protocols/validation'

import type { LoginProps } from './types'

import { Login } from './Login'

const mockedUseFormContext: IFormContextProps = {
  formState: {},
  setEmailContent: jest.fn(),
  setEmailErrorMessage: jest.fn(),
  setErrorMessage: jest.fn(),
  setIsLoading: jest.fn(),
  setPasswordContent: jest.fn(),
  setPasswordErrorMessage: jest.fn()
}

jest.mock('@presentation/contexts/form', () => ({
  useFormContext: () => mockedUseFormContext
}))

class ValidationSpy implements IValidation {
  errorMessage: string
  fieldName: string
  fieldValue: string

  validate(fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}

const validation = new ValidationSpy()

const makeSut = (
  props: Partial<LoginProps> = {}
): Omit<RenderOptions, 'wrapper'> => {
  const component = <Login validation={validation} {...props} />

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

  it('should validate the email value', async () => {
    const emailContent = 'any@email.com'
    mockedUseFormContext.formState = { emailContent, passwordContent: '' }
    makeSut()

    expect(validation.fieldName).toBe('email')
    expect(validation.fieldValue).toEqual(emailContent)
  })

  it('should validate the password value', async () => {
    const passwordContent = 'any_password'
    mockedUseFormContext.formState = { emailContent: '', passwordContent }
    makeSut()

    expect(validation.fieldName).toBe('password')
    expect(validation.fieldValue).toEqual(passwordContent)
  })
})
