import { render, screen } from '@testing-library/react'

import LoginPage from '../../app/login/page'

// This is a example of a test
describe('Login', () => {
  const setup = () => {
    render(<LoginPage />)
  }

  it('renders a heading', () => {
    setup()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
