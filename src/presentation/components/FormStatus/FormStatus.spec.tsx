import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import { faker } from '@faker-js/faker'

import type { FormStatusProps } from './types'

import { FormStatus } from './FormStatus'

const makeSut = (
  props: Partial<FormStatusProps> = {}
): Omit<RenderOptions, 'wrapper'> => {
  const component = <FormStatus {...props} />

  return render(component)
}

describe('FormStatus', () => {
  it('should render the error message', () => {
    const errorMessage = faker.string.sample()
    makeSut({ errorMessage })

    const statusErrorMessage = screen.getByTestId('form-status--error')

    expect(statusErrorMessage).toHaveTextContent(errorMessage)
  })

  it('should render spinner when isLoading is true', () => {
    makeSut({ isLoading: true })

    const spinner = screen.getByTestId('form-status--spinner--container')

    expect(spinner).toBeVisible()
  })

  it('should hide the spinner if isLoading is false', () => {
    makeSut()

    const spinner = screen.queryByTestId('form-status--spinner--container')

    expect(spinner).not.toBeInTheDocument()
  })
})
