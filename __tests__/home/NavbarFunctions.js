import { handleLogout } from '../../app/home/Navbar'
import { logout } from '../../app/_providers/authUser/AuthUserActions'

jest.mock('../../app/_providers/authUser/AuthUserActions', () => {
  const originalModule = jest.requireActual(
    '../../app/_providers/authUser/AuthUserActions'
  )
  return {
    __esModule: true,
    ...originalModule,
    logout: jest.fn(),
  }
})
describe('Navbar functions', () => {
  let dispatch, router, reloadMock
  beforeEach(() => {
    dispatch = jest.fn()
    router = {
      replace: jest.fn(),
    }
    reloadMock = jest.fn()
    delete window.location
    window.location = { reload: reloadMock }
  })

  it('debería llamar a logout y recargar la página en caso de éxito', async () => {
    logout.mockResolvedValue({ success: true })

    await handleLogout(dispatch, router)

    expect(logout).toHaveBeenCalled()
    expect(router.replace).toHaveBeenCalledWith('/', { replace: true })
    expect(window.location.reload).toHaveBeenCalled()
  })

  it('no debería recargar la página en caso de fallo', async () => {
    logout.mockResolvedValue({ success: false })

    await handleLogout(dispatch, router)

    expect(logout).toHaveBeenCalledWith(dispatch)
    expect(router.replace).not.toHaveBeenCalled()
    expect(window.location.reload).not.toHaveBeenCalled()
  })
})
