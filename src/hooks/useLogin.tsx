import { useMutation } from "@tanstack/react-query"
import { axiosClient } from "../api/axiosClient"

interface LoginPayload {
    email: string
    password: string
}

interface LoginResponse {
    token: string
}

export const useLogin = (loginOrSessionStorage: boolean) => {

    return useMutation<LoginResponse, unknown, LoginPayload>({
        mutationFn: async (credentials) => {
            const response = await axiosClient.post<LoginResponse>('/auth/login', credentials)
            return response.data
        },
        onSuccess: (data) => {
            if(loginOrSessionStorage) {

                localStorage.setItem('token', data.token)
                console.log('token pobrany i zapisany do localstorage')
            }else{
                sessionStorage.setItem('token', data.token)
                console.log('token pobrany i zapisaby w sessionstorage')
            }
        },
        onError: (error) => {
            console.log('błąd logowania', error)
        }
    })
}