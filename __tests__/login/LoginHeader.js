import { render, screen } from '@testing-library/react'

import LoginHeader from '../../app/login/LoginHeader'
import { describe } from 'node:test'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('Login Header', () => {
  const setup = () => {
    render(<LoginHeader />)
  }

  it('Should render a "Iniciar Sesion" text', () => {
    setup()
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument()
  })
})
