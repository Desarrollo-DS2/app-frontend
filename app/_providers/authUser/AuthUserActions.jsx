import { loginAuthUser, verifyCaptcha } from '@/app/_api/authUser/authUser'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

export const actionTypes = {
  SET_USER: 'SET_USER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
}

export const login = async (dispatch, payload, captcha) => {
  return new Promise((resolve, reject) => {
    if (captcha) {
      verifyCaptcha({ captcha_token: captcha })
        .then((response) => {
          if (response?.success) {
            loginAuthUser(payload)
              .then((response) => {
                if (response.access && response.refresh) {
                  const authUser = jwtDecode(response.access)
                  if (authUser) {
                    Cookies.set('currentUser', JSON.stringify(response))
                    dispatch({
                      type: actionTypes.LOGIN,
                      payload: {
                        user: authUser,
                        access: response.access,
                        refresh: response.refresh,
                      },
                    })
                    resolve({ success: true })
                  } else {
                    handleLoginError(dispatch)
                    reject(new Error('Invalid token'))
                  }
                } else {
                  handleLoginError(dispatch)
                  reject(new Error('Invalid token'))
                }
              })
              .catch((error) => {
                handleLoginError(dispatch)
                reject(error)
              })
          }
        })
        .catch((error) => {
          if (error.response.data.fail === 'timeout-or-duplicate') {
            console.error('Captcha timeout or duplicate')
          } else {
            console.error(error.response.data.fail)
          }
          reject(error)
        })
    } else {
      reject(new Error('Captcha not verified'))
    }
  })
}

export const logout = async (dispatch) => {
  try {
    Cookies.remove('currentUser')
    dispatch({ type: actionTypes.LOGOUT })
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

export const handleLoginError = (dispatch, type = null, error = null) => {
  dispatch({
    type: type || actionTypes.LOGIN_ERROR,
    payload: { error: error || 'Credenciales invalidas' },
  })
}
