import React from 'react'
import { render } from '@testing-library/react'
import Navbar from '../../app/home/Navbar'
import { AuthUserProvider } from '../../app/_providers/authUser/AuthUserProvider'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}))

describe('Navbar', () => {
  it('debería renderizar el componente Navbar', () => {
    const { getByTestId } = render(
      <AuthUserProvider>
        <Navbar collapsed={false} />
      </AuthUserProvider>
    )
    expect(getByTestId('navbar')).toBeInTheDocument()
  })

  it('debería aplicar la clase correcta cuando está colapsado', () => {
    const { getByTestId, rerender } = render(
      <AuthUserProvider>
        <Navbar collapsed={false} />
      </AuthUserProvider>
    )

    // Verificar que inicialmente no está colapsado
    expect(getByTestId('navbar')).not.toHaveClass('ant-layout-sider-collapsed')

    // Rerenderizar con el estado colapsado
    rerender(
      <AuthUserProvider>
        <Navbar collapsed={true} />
      </AuthUserProvider>
    )
    expect(getByTestId('navbar')).toHaveClass('ant-layout-sider-collapsed')
  })

  it('debería mostrar el logo y el texto cuando no está colapsado', () => {
    const { getByAltText, getByText } = render(
      <AuthUserProvider>
        <Navbar collapsed={false} />
      </AuthUserProvider>
    )

    expect(getByAltText('Logo')).toBeInTheDocument()
    expect(getByText('Restaurante')).toBeInTheDocument()
    expect(getByText('Univalle')).toBeInTheDocument()
  })

  it('debería mostrar solo el logo cuando está colapsado', () => {
    const { getByAltText, queryByText } = render(
      <AuthUserProvider>
        <Navbar collapsed={true} />
      </AuthUserProvider>
    )

    expect(getByAltText('Logo')).toBeInTheDocument()
    expect(queryByText('Restaurante')).not.toBeInTheDocument()
    expect(queryByText('Univalle')).not.toBeInTheDocument()
  })
})
