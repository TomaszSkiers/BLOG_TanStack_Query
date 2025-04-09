import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from './useLogin'
import { useNavigate } from 'react-router-dom'

const loginSchema = z.object({
  email: z.string().email({ message: 'Nieprawidłowy adres email' }),
  password: z.string().min(6, { message: 'Hasło musi mieć min. 6 znaków' }),
  remember: z.boolean(),
})

export type LoginFormValues = z.infer<typeof loginSchema>

export const useLoginForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  console.log(showPassword)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  const remember = watch('remember')
  const loginMutation = useLogin(remember)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => navigate('/'),
      },
    )
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    loginError: loginMutation.isError,
    loginPending: loginMutation.isPending,
  }
}
