import { createContext, useState, ReactNode, useMemo, useCallback } from 'react'
import { darkTheme } from '../themes/darkTheme'
import { lightTheme } from '../themes/lightTheme'
import { ThemeProvider } from '@mui/material/styles'

type ThemeContextType = {
  toggleTheme: () => void
  isDarkMode: boolean
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
)

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const STORAGE_KEY = 'themeMode'

  const getStoredTheme = (): boolean => {
    if (typeof window === 'undefined') return false

    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY)
      return savedTheme !== null ? JSON.parse(savedTheme) : false
    } catch (error) {
      console.error('Błąd odczytu localStorage:', error)
      return false
    }
  }

  const storeTheme = (isDark: boolean) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(isDark))
      }
    } catch (error) {
      console.error('Błąd zapisu localStorage:', error)
    }
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getStoredTheme)

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newMode = !prev
      storeTheme(newMode)
      return newMode
    })
  }, [])

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode],
  )

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
