import axios from 'axios'

export const baseURL = 'http://localhost:3000/'
// export const baseURL = 'http://mh-pulse.ru/'
export const API_URL = baseURL + 'api/'

const API = axios.create({
  baseURL: API_URL
})

export default API
