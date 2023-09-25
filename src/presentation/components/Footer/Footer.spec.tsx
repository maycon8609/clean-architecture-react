import { render, screen } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'

import type { FooterProps } from './types'

import { Footer } from './Footer'

const makeSut = (
  props: Partial<FooterProps> = {}
): Omit<RenderOptions, 'wrapper'> => {
  const component = <Footer {...props} />

  return render(component)
}

describe('Footer', () => {
  it('should be visible on screen', () => {
    makeSut()

    const footer = screen.getByTestId('footer')

    expect(footer).toBeVisible()
  })
})
