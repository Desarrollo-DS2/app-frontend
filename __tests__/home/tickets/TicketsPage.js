import TicketsPage from '../../../app/home/tickets/page'
import { render, screen } from '@testing-library/react'
import { AuthUserProvider } from '../../../app/_providers/authUser/AuthUserProvider'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('TicketsPage', () => {
  it('should render the component TicketsPage', () => {
    render(
      <AuthUserProvider>
        <TicketsPage />
      </AuthUserProvider>
    )

    expect(screen.getByText('Consultar Tickets')).toBeInTheDocument()
  })
})
