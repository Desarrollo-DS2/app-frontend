import { render, screen } from '@testing-library/react'

import LoginSide from '../../app/login/LoginSide'
import { describe } from 'node:test'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('Login Header', () => {
  const setup = () => {
    render(<LoginSide />)
  }

  it('Should render a without errors', () => {
    setup()
    expect(screen.getByTestId('icon-restaurant')).toBeInTheDocument()
  })
})
