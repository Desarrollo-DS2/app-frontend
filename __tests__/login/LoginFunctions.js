import { onFinish, onGoForgotPassword } from '../../app/login/LoginForm'
import {
  login,
  handleLoginError,
} from '../../app/_providers/authUser/AuthUserActions'
import { describe } from 'node:test'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}))

jest.mock('../../app/_providers/authUser/AuthUserActions', () => {
  const originalModule = jest.requireActual(
    '../../app/_providers/authUser/AuthUserActions'
  )
  return {
    __esModule: true,
    ...originalModule,
    login: jest.fn(),
    handleLoginError: jest.fn(),
  }
})

describe('On Finish', () => {
  it('handles successful login', async () => {
    const email = 'test@example.com'
    const password = 'password'
    const recaptchaRef = { current: { getValue: jest.fn(), reset: jest.fn() } }
    const dispatch = jest.fn()
    const router = { push: jest.fn() }

    login.mockResolvedValue({ success: true })

    await onFinish({ email, password }, recaptchaRef, dispatch, router)

    expect(login).toHaveBeenCalledWith(
      dispatch,
      { email, password },
      recaptchaRef.current.getValue()
    )
    expect(router.push).toHaveBeenCalledWith('/home/tickets')
    expect(recaptchaRef.current.reset).not.toHaveBeenCalled()
  })

  it('handles successful login failed', async () => {
    const email = 'test@example.com'
    const password = 'password'
    const recaptchaRef = { current: { getValue: jest.fn(), reset: jest.fn() } }
    const dispatch = jest.fn()
    const router = { push: jest.fn() }

    login.mockResolvedValue({ success: false })

    await onFinish({ email, password }, recaptchaRef, dispatch, router)

    expect(login).toHaveBeenCalledWith(
      dispatch,
      { email, password },
      recaptchaRef.current.getValue()
    )
    expect(router.push).not.toHaveBeenCalled()
  })

  it('handles no user provided', async () => {
    const recaptchaRef = { current: { getValue: jest.fn(), reset: jest.fn() } }
    const dispatch = jest.fn()
    const router = { push: jest.fn() }

    await onFinish({ email: '', password: '' }, recaptchaRef, dispatch, router)

    expect(router.push).not.toHaveBeenCalled()
  })

  it('handles unsuccessful login', async () => {
    const email = 'tes@example.com'
    const password = 'password'
    const recaptchaRef = { current: { getValue: jest.fn(), reset: jest.fn() } }
    const dispatch = jest.fn()
    const router = { push: jest.fn() }

    const error = new Error('Login failed')
    login.mockRejectedValue(error)

    await onFinish({ email, password }, recaptchaRef, dispatch, router)

    expect(login).toHaveBeenCalledWith(
      dispatch,
      { email, password },
      recaptchaRef.current.getValue()
    )
    expect(router.push).not.toHaveBeenCalled()
  })
})

describe('On Go Forgot Password', () => {
  it('redirects to forgot password', () => {
    const router = { push: jest.fn() }

    onGoForgotPassword(router)

    expect(router.push).toHaveBeenCalledWith('/forgot-password')
  })
})
