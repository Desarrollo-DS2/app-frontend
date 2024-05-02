import { fireEvent, render, screen } from '@testing-library/react'

import { describe } from 'node:test'
import RecoveryForm from '../../app/recovery-password/RecoveryForm'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('Reset Form', () => {
  const setup = () => {
    render(<RecoveryForm />)
  }

  it('Should render a "Restablecer Contraseña" button', () => {
    setup()
    const restablecerContraseñaButton = screen.getByRole('button', {
      name: /Restablecer Contraseña/i,
    })
    expect(restablecerContraseñaButton).toBeInTheDocument()
  })

  it('Should render a new password text field', () => {
    setup()
    const newPasswordLabel = screen.getByText('Nueva contraseña')
    expect(newPasswordLabel).toBeInTheDocument()
  })

  it('Should render a confirm new password text field', () => {
    setup()
    const confirmPasswordLabel = screen.getByText('Confirmar nueva contraseña')
    expect(confirmPasswordLabel).toBeInTheDocument()
  })

  it('Should render a text field with id "newPassword"', () => {
    setup()
    const newPasswordField = screen.getByTestId('newPassword')
    expect(newPasswordField).toBeInTheDocument()
  })

  it('Should render a text field with id "confirmNewPassword"', () => {
    setup()
    const confirmNewPassword = screen.getByTestId('confirmNewPassword')
    expect(confirmNewPassword).toBeInTheDocument()
  })

  it('should update the newPassword field', () => {
    setup()
    const newPasswordField = screen.getByTestId('newPassword');
    fireEvent.change(newPasswordField, { target: { value: 'newPassword123' } });
    expect(newPasswordField.value).toBe('newPassword123');
  });

  it('Should show an error message when new password is empty', async () => {
    setup()
    const newPassword = screen.getByTestId('newPassword')
    fireEvent.change(newPassword, { target: { value: 'a' } })
    fireEvent.change(newPassword, { target: { value: '' } })
    fireEvent.blur(newPassword)
    await screen.findByText(/Por favor ingrese su nueva contraseña/i)
    expect(screen.getByText(/Por favor ingrese su nueva contraseña/i)).toBeInTheDocument()
  })

  it('Should show an error message when confirm new password is empty', async () => {
    setup()
    const confirmNewPassword = screen.getByTestId('confirmNewPassword')
    fireEvent.change(confirmNewPassword, { target: { value: 'a' } })
    fireEvent.change(confirmNewPassword, { target: { value: '' } })
    fireEvent.blur(confirmNewPassword)
    await screen.findByText(/Por favor confirme su nueva contraseña/i)
    expect(screen.getByText(/Por favor confirme su nueva contraseña/i)).toBeInTheDocument()
  })

  it('Should show an error message when confirm new password does not match newPassword', async () => {
    setup();
    const newPassword = screen.getByTestId('newPassword');
    const confirmNewPassword = screen.getByTestId('confirmNewPassword');
    fireEvent.change(newPassword, { target: { value: 'newPassword123' } });
    fireEvent.change(confirmNewPassword, { target: { value: 'differentPassword' } });
    fireEvent.blur(confirmNewPassword);
    await screen.findByText(/Las contraseñas no coinciden/i);
    expect(screen.getByText(/Las contraseñas no coinciden/i)).toBeInTheDocument();
});

})  