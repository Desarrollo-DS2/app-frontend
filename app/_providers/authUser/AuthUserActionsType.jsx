import {loginAuthUser} from  '../../_api/authUser/authUser'

// This is a example of the actions types that you can use in the reducer
export const actionTypes = {
  SET_USER: 'SET_USER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
}

export const login = (dispatch, user) => {
  loginAuthUser(user)
  dispatch({ type: actionTypes.LOGIN, payload: user })
}

export const logout = (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT })
}

export const login_error = (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_ERROR,
    payload: { error: 'Credenciales inválidas' },
  })
}
