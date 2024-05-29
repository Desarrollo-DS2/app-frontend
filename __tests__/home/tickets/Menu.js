import React from 'react'
import { render } from '@testing-library/react'
import Menu from '../../../app/home/tickets/Menu'
import { AuthUserProvider } from '../../../app/_providers/authUser/AuthUserProvider'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('Menu Component', () => {
  it('renders the table with correct column headers', () => {
    const { getByText } = render(<Menu />)
    expect(getByText('Dia')).toBeInTheDocument()
    expect(getByText('Sopa')).toBeInTheDocument()
    expect(getByText('Arroz')).toBeInTheDocument()
    expect(getByText('Carne')).toBeInTheDocument()
    expect(getByText('Principio')).toBeInTheDocument()
    expect(getByText('Ensalada')).toBeInTheDocument()
    expect(getByText('Jugo')).toBeInTheDocument()
  })

  it('renders the correct number of rows', () => {
    const { container } = render(
      <AuthUserProvider>
        <Menu />
      </AuthUserProvider>
    )
    const rows = container.querySelectorAll('tr')
    expect(rows).toHaveLength(6)
  })

  it('renders the correct data in the first row', () => {
    const { container } = render(
      <AuthUserProvider>
        <Menu />
      </AuthUserProvider>
    )
    const firstRow = container.querySelectorAll('tr')[1]
    const cells = firstRow.querySelectorAll('td')

    expect(cells[0]).toHaveTextContent('Lunes')
    expect(cells[1]).toHaveTextContent('De Lentejas')
    expect(cells[2]).toHaveTextContent('Blanco')
    expect(cells[3]).toHaveTextContent('Cerdo Asado en Salsa de Piña')
    expect(cells[4]).toHaveTextContent('Maduro al Horno')
    expect(cells[5]).toHaveTextContent('Lechuga y Tomate')
    expect(cells[6]).toHaveTextContent('Naranja')
  })
})
