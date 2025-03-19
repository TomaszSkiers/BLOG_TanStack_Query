import axios from 'axios'
import { BASE_URL } from '../constants/baseUrl'

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
})

