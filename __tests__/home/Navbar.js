import React from 'react'
import { render } from '@testing-library/react'
import Navbar from '../../app/home/Navbar'

describe('Navbar', () => {
  it('debería renderizar el componente Navbar', () => {
    const { getByTestId } = render(<Navbar collapsed={false} />)
    expect(getByTestId('navbar')).toBeInTheDocument()
  })

  it('debería aplicar la clase correcta cuando está colapsado', () => {
    const { getByTestId, rerender } = render(<Navbar collapsed={false} />)

    // Verificar que inicialmente no está colapsado
    expect(getByTestId('navbar')).not.toHaveClass('ant-layout-sider-collapsed')

    // Rerenderizar con el estado colapsado
    rerender(<Navbar collapsed={true} />)
    expect(getByTestId('navbar')).toHaveClass('ant-layout-sider-collapsed')
  })

  it('debería mostrar el logo y el texto cuando no está colapsado', () => {
    const { getByAltText, getByText } = render(<Navbar collapsed={false} />)

    expect(getByAltText('Logo')).toBeInTheDocument()
    expect(getByText('Restaurante')).toBeInTheDocument()
    expect(getByText('Univalle')).toBeInTheDocument()
  })

  it('debería mostrar solo el logo cuando está colapsado', () => {
    const { getByAltText, queryByText } = render(<Navbar collapsed={true} />)

    expect(getByAltText('Logo')).toBeInTheDocument()
    expect(queryByText('Restaurante')).not.toBeInTheDocument()
    expect(queryByText('Univalle')).not.toBeInTheDocument()
  })
})
