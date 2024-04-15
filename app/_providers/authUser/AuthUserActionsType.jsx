export const actionTypes = {
  SET_USER: 'SET_USER',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_ERROR: 'LOGIN_ERROR',
}

export const login = (dispatch, payload) => {
  dispatch({ type: actionTypes.LOGIN, payload })
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
