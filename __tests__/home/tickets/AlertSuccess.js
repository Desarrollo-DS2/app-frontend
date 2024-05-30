import { render, screen, act } from '@testing-library/react'
import AlertSuccess from '../../../app/home/tickets/AlertSuccess'

window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}))

describe('AlertSuccess', () => {
  test('renders with correct props', () => {
    const message = 'Success message'
    const subtitle = 'Success subtitle'
    const open = true
    const setOpen = jest.fn()

    render(
      <AlertSuccess
        message={message}
        subtitle={subtitle}
        open={open}
        setOpen={setOpen}
      />
    )

    const successTitle = screen.getByText(message)
    const successSubtitle = screen.getByText(subtitle)

    expect(successTitle).toBeInTheDocument()
    expect(successSubtitle).toBeInTheDocument()
  })

  test('closes after 3 seconds when open is true', async () => {
    jest.useFakeTimers()

    const message = 'Success message'
    const subtitle = 'Success subtitle'
    const open = true
    const setOpen = jest.fn()

    render(
      <AlertSuccess
        message={message}
        subtitle={subtitle}
        open={open}
        setOpen={setOpen}
      />
    )

    expect(setOpen).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    expect(setOpen).toHaveBeenCalledWith(false)
  })

  test('does not close when open is false', () => {
    jest.useFakeTimers()

    const message = 'Success message'
    const subtitle = 'Success subtitle'
    const open = false
    const setOpen = jest.fn()

    render(
      <AlertSuccess
        message={message}
        subtitle={subtitle}
        open={open}
        setOpen={setOpen}
      />
    )

    expect(setOpen).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    expect(setOpen).not.toHaveBeenCalled()
  })
})
