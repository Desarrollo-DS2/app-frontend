import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FormTickets from '../../../app/home/tickets/FormTickets'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('FormTickets Component', () => {
  const handleFinish = jest.fn()
  const handleClose = jest.fn()

  const defaultProps = {
    open: true,
    numTickets: 5,
    onFinish: handleFinish,
    onClose: handleClose,
    isLoading: false,
  }

  it('renders correctly', () => {
    const { getByText } = render(<FormTickets {...defaultProps} />)
    expect(getByText('Comprar Tickets')).toBeInTheDocument()
  })

  it('sets default value to 1', () => {
    const { getByTestId } = render(<FormTickets {...defaultProps} />)
    const input = getByTestId('input-tickets')
    expect(input.value).toBe('1')
  })

  it('validates number of tickets', async () => {
    const { getByTestId } = render(<FormTickets {...defaultProps} />)
    const input = getByTestId('input-tickets')

    fireEvent.change(input, { target: { value: '30' } })
    fireEvent.blur(input)
    expect(input.value).toBe('25')
  })
})
