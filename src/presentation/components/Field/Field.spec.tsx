import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import { faker } from '@faker-js/faker'
import userEvent from '@testing-library/user-event'

import type { FieldProps } from './types'

import { Field } from './Field'

const makeSut = ({
  onChange = jest.fn(),
  ...props
}: Partial<FieldProps> = {}): Omit<RenderOptions, 'wrapper'> => {
  const component = <Field onChange={onChange} {...props} />

  return render(component)
}

let userEventSetup = userEvent.setup()

beforeEach(() => {
  userEventSetup = userEvent.setup()
})

describe('Field', () => {
  it('should render the field with the given value', () => {
    const value = faker.string.sample()
    makeSut({ value })

    const input = screen.getByTestId('field--input')

    expect(input).toHaveValue(value)
  })

  it('should run onChange function when typing in input', async () => {
    const onChange = jest.fn()
    const value = faker.person.firstName()
    makeSut({ onChange })

    const input = screen.getByTestId('field--input')
    await userEventSetup.type(input, value)

    expect(onChange).toHaveBeenCalledTimes(value.length)
  })

  it('should contain the status icon', () => {
    makeSut()

    const statusIcon = screen.getByTestId('field--status')

    expect(statusIcon).toBeVisible()
  })
})
