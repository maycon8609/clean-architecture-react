import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import type { SpinnerProps } from './types'

import { Spinner } from './Spinner'

const makeSut = (
  props: Partial<SpinnerProps> = {}
): Omit<RenderOptions, 'wrapper'> => {
  const component = <Spinner {...props} />

  return render(component)
}

describe('Spinner', () => {
  it('should render the componente', () => {
    makeSut()

    const spinner = screen.getByTestId('spinner--container')

    expect(spinner).toBeInTheDocument()
  })
})
