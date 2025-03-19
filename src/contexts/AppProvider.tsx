import { ReactNode } from 'react'
import { ThemeProviderWrapper } from './ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </QueryClientProvider>
  )
}
