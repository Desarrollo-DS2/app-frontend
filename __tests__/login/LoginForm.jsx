import { fireEvent, render, screen } from '@testing-library/react'
import {AuthUserProvider} from '../../app/_providers/authUser/AuthUserProvider'
import LoginForm from '../../app/login/LoginForm'
import { describe } from 'node:test'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('Login Form', () => {
  const setup = () => {
    render(<AuthUserProvider>
      <LoginForm />
    </AuthUserProvider>)
  }

  it('Should render a "Iniciar Sesion" button', () => {
    setup()
    const iniciarSesionButton = screen.getByRole('button', {
      name: /Iniciar Sesion/i,
    })
    expect(iniciarSesionButton).toBeInTheDocument()
  })

  it('Should render a "Recuperar contraseña" button', () => {
    setup()
    const iniciarSesionButton = screen.getByRole('button', {
      name: /Recuperar contraseña/i,
    })
    expect(iniciarSesionButton).toBeInTheDocument()
  })

  it('Should render a text field with id "email"', () => {
    setup()
    const emailField = screen.getByTestId('email')
    expect(emailField).toBeInTheDocument()
  })

  it('Should render a text field with id "password"', () => {
    setup()
    const passwordField = screen.getByTestId('password')
    expect(passwordField).toBeInTheDocument()
  })

  it('Should render a email text field', () => {
    setup()
    const emailLabel = screen.getByText('Correo Institucional')
    expect(emailLabel).toBeInTheDocument()
  })

  it('Should render a password text field', () => {
    setup()
    const passwordLabel = screen.getByText('Contraseña')
    expect(passwordLabel).toBeInTheDocument()
  })

  it('Should update the email text field', () => {
    setup()
    const emailTextField = screen.getByTestId('email')
    fireEvent.change(emailTextField, {
      target: { value: 'test@correounivalle.edu.co' },
    })
    expect(emailTextField.value).toBe('test@correounivalle.edu.co')
  })

  it('Should update the password text field', () => {
    setup()
    const passwordTextField = screen.getByTestId('password')
    fireEvent.change(passwordTextField, { target: { value: 'password' } })
    expect(passwordTextField.value).toBe('password')
  })

  it('Should show an error message when email is invalid', async () => {
    setup()
    const emailTextField = screen.getByTestId('email')
    fireEvent.change(emailTextField, { target: { value: 'test' } })
    fireEvent.blur(emailTextField)
    await screen.findByText(/Por favor ingrese un correo institucional valido/i)
    expect(screen.getByText(/Por favor ingrese un correo institucional valido/i)).toBeInTheDocument()
  })

  it('Should show an error message when email is empty', async () => {
    setup()
    const emailTextField = screen.getByTestId('email')
    fireEvent.change(emailTextField, { target: { value: 'a' } })
    fireEvent.change(emailTextField, { target: { value: '' } })
    fireEvent.blur(emailTextField)
    await screen.findByText(/Por favor ingrese su correo institucional/i)
    expect(screen.getByText(/Por favor ingrese su correo institucional/i)).toBeInTheDocument()
  })

  it('Should show an error message when password is empty', async () => {
    setup()
    const passwordTextField = screen.getByTestId('password')
    fireEvent.change(passwordTextField, { target: { value: 'a' } })
    fireEvent.change(passwordTextField, { target: { value: '' } })
    fireEvent.blur(passwordTextField)
    await screen.findByText(/Por favor ingrese su contraseña/i)
    expect(screen.getByText("Por favor ingrese su contraseña")).toBeInTheDocument()
  })

  it('Password field should be a password input', () => {
    setup()
    const passwordField = screen.getByTestId('password')
    expect(passwordField).toHaveAttribute('type', 'password')
  })

  it('Should reveal password when clicking a specific button', () => {
    setup()
    const passwordField = screen.getByTestId('password')
    const revealPasswordButton = screen.getByRole('img', {
      name: /eye-invisible/i,
    })
    expect(passwordField).toHaveAttribute('type', 'password')
    fireEvent.click(revealPasswordButton)
    expect(passwordField).toHaveAttribute('type', 'text')
  })

  it('Should renders a reCAPTCHA component', () => {
    setup()
    const recaptchaComponent = screen.getByTestId('recaptcha')
    expect(recaptchaComponent).toBeInTheDocument()
  })
  
})
