import React from 'react'
import { render } from '@testing-library/react'
import BuyTicketsButton from '../../../app/home/tickets/BuyTicketsButton'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('BuyTicketsButton Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<BuyTicketsButton />)
    expect(getByText('Comprar Tickets')).toBeInTheDocument()
  })

  it('renders with the correct text', () => {
    const { getByText } = render(<BuyTicketsButton />)
    expect(getByText('Comprar Tickets')).toBeInTheDocument()
  })

  it('renders with the correct icon', () => {
    const { container } = render(<BuyTicketsButton />)
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('applies correct styles', () => {
    const { getByText } = render(<BuyTicketsButton />)
    const button = getByText('Comprar Tickets').parentElement
    expect(button).toHaveStyle('font-size: 18px')
    expect(button).toHaveStyle('padding: 10px 20px')
    expect(button).toHaveStyle('border-radius: 5px')
    expect(button).toHaveStyle('display: flex')
    expect(button).toHaveStyle('align-items: center')
    expect(button).toHaveStyle('justify-content: center')
  })

  it('applies correct margin to the icon', () => {
    const { container } = render(<BuyTicketsButton />)
    const icon = container.querySelector('svg')
    expect(icon).toHaveStyle('margin-right: 8px')
  })
})
