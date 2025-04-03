import { useMutation } from '@tanstack/react-query'
import { axiosClient } from '../api/axiosClient'
import { useAuth } from './useAuth'

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  token: string
}

export const useLogin = (whetherContextOrLocalStorage: boolean) => {
  const { login } = useAuth()

  return useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: async (credentials) => {
      const response = await axiosClient.post<LoginResponse>(
        '/auth/login',
        credentials,
      )
      return response.data
    },
    onSuccess: (data) => {
      login(data.token, whetherContextOrLocalStorage) 
    },
    onError: (error) => {
      console.log('błąd logowania', error)
    },
  })
}
//* to już nie będzie loginOrSessionStroage tylko contextOrSessionStorage nie
//*
