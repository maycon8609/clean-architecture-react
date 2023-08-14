import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import { faker } from '@faker-js/faker'
import userEvent from '@testing-library/user-event'

import type { HeaderProps } from './types'

import { Header } from '.'

const makeSut = (
  props: Partial<HeaderProps>
): Omit<RenderOptions, 'wrapper'> => {
  const component = <Header {...props} />

  return render(component)
}

let userEventSetup = userEvent.setup()

beforeEach(() => {
  userEventSetup = userEvent.setup()
})

describe('Header', () => {
  it('should run onChange function when typing in input', async () => {
    const onChange = jest.fn()
    const value = faker.string.sample()
    makeSut({ onChange })

    const input = screen.getByTestId('field--input')
    await userEventSetup.type(input, value)

    expect(onChange).toHaveBeenCalledTimes(value.length)
  })
})
