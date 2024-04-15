import apiBase from './rootApi'

export const loginAuthUser = async (login) => {
  try {
    const response = await apiBase.post('/auth/jwt/create', login)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
