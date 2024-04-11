import { render, screen } from '@testing-library/react'
import LoginPage from '../../app/login/page'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

test('Should renders page components', () => {
  render(<LoginPage />)
  expect(screen.getByTestId('header')).toBeInTheDocument()
  expect(screen.getByTestId('side')).toBeInTheDocument()
  expect(screen.getByTestId('form')).toBeInTheDocument()
})
