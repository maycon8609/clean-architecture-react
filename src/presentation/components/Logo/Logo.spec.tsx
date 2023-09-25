import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import type { LogoProps } from './types'

import { Logo } from './Logo'

const makeSut = (props: Partial<LogoProps>): Omit<RenderOptions, 'wrapper'> => {
  const component = <Logo {...props} />

  return render(component)
}

describe('Logo', () => {
  it('should render the componente', () => {
    makeSut({})

    const logo = screen.getByTestId('logo')

    expect(logo).toBeInTheDocument()
  })
})
