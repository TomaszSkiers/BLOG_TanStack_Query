import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { IconButton } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material';

export const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('ThemeToggle must be used within a ThemeProviderWrapper')
  }

  const { toggleTheme, isDarkMode } = themeContext

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {isDarkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  )
}


