import axios from 'axios'

const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const apiBase = axios.create({
  baseURL: apiURL,
})

export default apiBase
