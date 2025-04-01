export interface AuthContextType {
  token: string | null
  isAuthenticated: boolean
  login: (token: string, remember?: boolean) => void
  logout: () => void
}