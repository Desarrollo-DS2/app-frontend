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
})
