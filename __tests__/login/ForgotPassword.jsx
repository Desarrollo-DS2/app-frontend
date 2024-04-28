import { fireEvent, render, screen } from '@testing-library/react'
import { describe } from 'node:test'
import ForgotPassForm from '../../app/login/forgot_password/ForgotPassForm'

window.matchMedia = jest.fn(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
}))

describe('Request Reset Pass', () => {
    const setup = () => {
        render(<ForgotPassForm />)
    }

    it('Should render a text field with id "email"', () => {
        setup()
        const emailField = screen.getByTestId('email')
        expect(emailField).toBeInTheDocument()
    })

    it('Should update the email text field', () => {
        setup()
        const emailTextField = screen.getByTestId('email')
        fireEvent.change(emailTextField, {
            target: { value: 'test@correounivalle.edu.co' },
        })
        expect(emailTextField.value).toBe('test@correounivalle.edu.co')
    })

    it('Should show an error message when email is invalid', async () => {
        setup()
        const emailTextField = screen.getByTestId('email')
        fireEvent.change(emailTextField, { target: { value: 'test' } })
        fireEvent.blur(emailTextField)
        await screen.findByText(/Por favor ingrese un correo institucional válido/i)
        expect(screen.getByText(/Por favor ingrese un correo institucional válido/i)).toBeInTheDocument()
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

})