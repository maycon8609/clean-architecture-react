import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import { faker } from '@faker-js/faker'

import type { HeaderProps } from './types'

import { Header } from '.'

const makeSut = (
  props: Partial<HeaderProps>
): Omit<RenderOptions, 'wrapper'> => {
  const component = <Header {...props} />

  return render(component)
}

describe('Header', () => {
  it('should render the logo', () => {
    makeSut({})

    const logo = screen.getByTestId('header--logo')

    expect(logo).toBeVisible()
  })

  it('should render the label passed by parameter', () => {
    const label = faker.string.sample()
    makeSut({ label })

    const headerLabel = screen.getByTestId('header--label')

    expect(headerLabel).toHaveTextContent(label)
  })
})
