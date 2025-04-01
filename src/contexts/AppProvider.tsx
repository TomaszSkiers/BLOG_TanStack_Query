import { ReactNode } from 'react'
import { ThemeProviderWrapper } from './ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './AuthContext'

const queryClient = new QueryClient()

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </QueryClientProvider>
    </AuthProvider>
  )
}
