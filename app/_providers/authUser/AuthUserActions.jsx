import { loginAuthUser } from '@/app/_api/authUser/authUser'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

export const actionTypes = {
  SET_USER: 'SET_USER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
}

export const login = (dispatch, payload, captcha) => {
  loginAuthUser(payload)
    .then((response) => {
      if (response) {
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
        } else {
          handleLoginError(dispatch)
        }
      } else {
        handleLoginError(dispatch)
      }
    })
    .catch((error) => {
      handleLoginError(dispatch)
    })
}

export const logout = (dispatch) => {
  Cookies.remove('currentUser')
  dispatch({
    type: actionTypes.LOGOUT,
  })
}

export const handleLoginError = (dispatch, type = null, error = null) => {
  dispatch({
    type: type || actionTypes.LOGIN_ERROR,
    payload: { error: error || 'Credenciales invalidas' },
  })
}
