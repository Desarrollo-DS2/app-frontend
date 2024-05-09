import { loginAuthUser } from '@/app/_api/authUser/authUser'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

export const actionTypes = {
  SET_USER: 'SET_USER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
}

export const login = async (dispatch, payload) => {
  try {
    const response = await loginAuthUser(payload)
    if (response.access) {
      const user = jwtDecode(response.access)
      Cookies.set('currentUser', user)
      dispatch({
        type: actionTypes.LOGIN,
        payload: {
          user,
          access: response.access,
          refresh: response.refresh,
        },
      })
      return { success: true }
    } else {
      handleLoginError(dispatch, actionTypes.LOGIN_ERROR, response)
      return { success: false }
    }
  } catch (error) {
    handleLoginError(dispatch, actionTypes.LOGIN_ERROR, error)
    return { success: false }
  }
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
