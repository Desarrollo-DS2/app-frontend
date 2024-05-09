import apiBase from './rootApi'

export const loginAuthUser = async (login) => {
  try {
    const response = await apiBase.post('/auth/jwt/create', login)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const verifyCaptcha = async (captcha) => {
  try {
    const response = await apiBase.post('/recaptcha/', captcha)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
