import React from 'react'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'
import ForgotLayout from '../../app/forgot-password/layout'
import RecoveryLayout from '../../app/recovery-password/layout'
import LoginLayout from '../../app/login/layout'
import HomeLayout from '../../app/home/layout'

const MockChildComponent = () => <div>Child Component</div>

describe('ForgotLayout', () => {
  it('debería renderizar correctamente con los elementos hijos', () => {
    const { getByText } = render(
      <ForgotLayout>
        <MockChildComponent />
      </ForgotLayout>
    )

    // Verifica que el texto del componente hijo esté presente en el DOM
    const childComponentText = getByText('Child Component')
    expect(childComponentText).toBeInTheDocument()

    // Verifica que las clases CSS se apliquen correctamente
    const parentContainer = getByText('Child Component').parentElement
    expect(parentContainer).toHaveClass(
      'items-center justify-center ant-flex css-dev-only-do-not-override-1kuana8 ant-flex-align-stretch ant-flex-vertical'
    )
  })

  it('debería tener una propiedad children requerida', () => {
    expect(ForgotLayout.propTypes.children).toBe(PropTypes.node.isRequired)
  })

  it('debería renderizar correctamente con los elementos hijos', () => {
    const { getByText } = render(
      <RecoveryLayout>
        <MockChildComponent />
      </RecoveryLayout>
    )

    const childComponentText = getByText('Child Component')
    expect(childComponentText).toBeInTheDocument()

    const parentContainer = getByText('Child Component').parentElement
    expect(parentContainer).toHaveClass(
      'items-center justify-center ant-flex css-dev-only-do-not-override-1kuana8 ant-flex-align-stretch ant-flex-vertical'
    )
  })

  it('debería tener una propiedad children requerida', () => {
    expect(RecoveryLayout.propTypes.children).toBe(PropTypes.node.isRequired)
  })

  it('debería renderizar correctamente con los elementos hijos', () => {
    const { getByText } = render(
      <LoginLayout>
        <MockChildComponent />
      </LoginLayout>
    )

    const childComponentText = getByText('Child Component')
    expect(childComponentText).toBeInTheDocument()

    const parentContainer = getByText('Child Component').parentElement
    expect(parentContainer).toHaveClass(
      'items-center justify-center ant-flex css-dev-only-do-not-override-1kuana8 ant-flex-align-stretch ant-flex-vertical'
    )
  })

  it('debería tener una propiedad children requerida', () => {
    expect(LoginLayout.propTypes.children).toBe(PropTypes.node.isRequired)
  })

  it('debería renderizar correctamente con los elementos hijos', () => {
    const { getByText } = render(
      <HomeLayout>
        <MockChildComponent />
      </HomeLayout>
    )

    const childComponentText = getByText('Child Component')
    expect(childComponentText).toBeInTheDocument()

    const parentContainer = getByText('Child Component').parentElement
    expect(parentContainer).toHaveClass(
      'items-center justify-center ant-flex css-dev-only-do-not-override-1kuana8 ant-flex-align-stretch ant-flex-vertical'
    )
  })

  it('debería tener una propiedad children requerida', () => {
    expect(HomeLayout.propTypes.children).toBe(PropTypes.node.isRequired)
  })
})
