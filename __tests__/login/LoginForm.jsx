import { fireEvent, render, screen } from '@testing-library/react'
import { authUserReducer, AuthUserProvider, initialState } from '../../app/_providers/authUser/AuthUserProvider'
import LoginForm from '../../app/login/LoginForm'
import { validateEmail } from '../../app/login/LoginForm'
import { describe } from 'node:test'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}))

describe('Login Form', () => {
  const setup = () => {
    render(
      <AuthUserProvider>
        <LoginForm />
      </AuthUserProvider>
    )
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

  // it('Should show an error message when email is invalid', async () => {
  //   setup()
  //   const emailTextField = screen.getByTestId('email')
  //   fireEvent.change(emailTextField, { target: { value: 'test' } })
  //   fireEvent.blur(emailTextField)
  //   await screen.findByText(/Por favor ingrese un correo institucional válido/i)
  //   expect(
  //     screen.getByText(/Por favor ingrese un correo institucional válido/i)
  //   ).toBeInTheDocument()
  // })

  it('Should show an error message when email is empty', async () => {
    setup()
    const emailTextField = screen.getByTestId('email')
    fireEvent.change(emailTextField, { target: { value: 'a' } })
    fireEvent.change(emailTextField, { target: { value: '' } })
    fireEvent.blur(emailTextField)
    await screen.findByText(/Por favor ingrese su correo institucional/i)
    expect(
      screen.getByText(/Por favor ingrese su correo institucional/i)
    ).toBeInTheDocument()
  })

  it('Should show an error message when password is empty', async () => {
    setup()
    const passwordTextField = screen.getByTestId('password')
    fireEvent.change(passwordTextField, { target: { value: 'a' } })
    fireEvent.change(passwordTextField, { target: { value: '' } })
    fireEvent.blur(passwordTextField)
    await screen.findByText(/Por favor ingrese su contraseña/i)
    expect(
      screen.getByText('Por favor ingrese su contraseña')
    ).toBeInTheDocument()
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

describe('Validate Email', () => {
  it('Should return a promise resolved when email is valid', async () => {
    const email = 'usuario@correounivalle.edu.co';
    const result = await validateEmail(null, email);
    expect(result).toBe(undefined);
  });

  it('Should return a promise rejected when email is invalid', async () => {
    const email = 'usuario@gmail.com';
    await expect(validateEmail(null, email)).rejects.toEqual('Por favor ingrese un correo institucional válido');
  });

  it('debería resolver si no se proporciona ningún correo (caso de campo vacío)', async () => {
    await expect(validateEmail(null, '')).rejects.toEqual('Por favor ingrese un correo institucional válido');
  });

})

describe('Auth reducer', () => {
  it('Should return a new state with the user logged in', () => {
    const state = initialState
    
    const action = {
      type: 'LOGIN',
      payload: {
        user: {
          email: 'a@gmail.com',
          password: 'password',
        },
        access: 'access',
        refresh: 'refresh',
      },
    }

    const newState = authUserReducer(state, action)

    expect(newState).toEqual({
      credentials: {
        email: 'a@gmail.com',
        password: 'password',
      },
      loggedIn: true,
      tokenAccess: 'access',
      tokenRefresh: 'refresh',
      error: null,
      user: [],
    })
  })

  it('Should return a new state with the user logged out', () => {
    const state = initialState

    const action = {
      type: 'LOGOUT',
    }

    const newState = authUserReducer(state, action)

    expect(newState).toEqual({
      credentials: null,
      loggedIn: false,
      tokenAccess: null,
      tokenRefresh: null,
      error: null,
      user: [],
    })
  })

  
  it('Should return a new state with the user loggin error', () => {
    const state = initialState

    const action = {
      type: 'LOGIN_ERROR',
    }

    const newState = authUserReducer(state, action)

    expect(newState).toEqual({
      credentials: null,
      loggedIn: false,
      tokenAccess: null,
      tokenRefresh: null,
      error: true,
      user: [],
    })
  })

  it('Should return a new state with the user set', () => {
    const state = initialState

    const action = {
      type: 'SET_USER',
      payload: {
        name: 'a',
        email: 'a@gmail.com',
      },
    }

    const newState = authUserReducer(state, action)

    expect(newState).toEqual({
      credentials: null,
      loggedIn: false,
      tokenAccess: null,
      tokenRefresh: null,
      error: null,
      user: {
        name: 'a',
        email: 'a@gmail.com',
      },
    })
  })
})
