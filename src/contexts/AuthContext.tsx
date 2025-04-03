import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { AuthContextType } from "../types/authContextTypes"

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null)

  console.log('authContext test tokena',token)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  const login = (newToken: string, remember = false) => {
    setToken(newToken)
    if (remember) {
      localStorage.setItem('token', newToken)
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: !!token,
      login,
      logout,
    }),[token]
  )

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  )
}


