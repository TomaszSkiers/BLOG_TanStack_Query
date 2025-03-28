import { useMutation } from "@tanstack/react-query"
import { axiosClient } from "../api/axiosClient"

interface LoginPayload {
    email: string
    password: string
}

interface LoginResponse {
    token: string
}

export const useLogin = () => {

    return useMutation<LoginResponse, unknown, LoginPayload>({
        mutationFn: async (credentials) => {
            const response = await axiosClient.post<LoginResponse>('/auth/login', credentials)
            return response.data
        },
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            console.log('token pobrany i zapisany do localstorage')
        },
        onError: (error) => {
            console.log('błąd logowania', error)
        }
    })
}