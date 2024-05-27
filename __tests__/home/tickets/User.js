import React from 'react'
import { render } from '@testing-library/react'
import User from '../../../app/home/tickets/User'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('User', () => {
  const user = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    nit: '1110363276',
    code: '2182551',
    role: 'Estudiante Pregrado',
  }

  it('renders user email, full name, nit, code, and role', () => {
    const { getByText } = render(<User user={user} />)

    // Verifica que los elementos de texto estén presentes en el renderizado del componente
    expect(getByText('john.doe@example.com')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('1110363276')).toBeInTheDocument()
    expect(getByText('2182551')).toBeInTheDocument()
    expect(getByText('Estudiante Pregrado')).toBeInTheDocument()
  })

  it('renders user first letter as Avatar', () => {
    const { getByTestId } = render(<User user={user} />)

    // Verifica que la letra inicial del nombre se renderice correctamente como Avatar
    expect(getByTestId('avatar')).toHaveTextContent('J')
  })
})
