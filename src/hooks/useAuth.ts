import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import { AuthContextType } from '../types/authContextTypes'

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
