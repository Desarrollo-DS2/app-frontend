import apiBase from '../api'

// This is a example of how to use the apiBase to make a request to the server

export const getAuthUser = async () => {
  try {
    const response = await apiBase.get('/auth-user/')
    return response.data
  } catch (error) {
    return error.response.data
  }
}
