import TicketsPage from '../../../app/home/tickets/page'
import { render, screen } from '@testing-library/react'

describe('TicketsPage', () => {
  it('should render the component TicketsPage', () => {
    render(<TicketsPage />)
    expect(screen.getByText('Tickets Page')).toBeInTheDocument()
  })
})
