import { render, screen } from '@testing-library/react'

import Homepage from '../../app/page'

// This is a example of a test
describe('Homepage', () => {
  const setup = () => {
    render(<Homepage />)
  }

  it('renders a heading', () => {
    setup()
    expect(screen.getByText('Templates')).toBeInTheDocument()
  })
})
