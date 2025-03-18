import { useContext, useMemo } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { IconButton } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'

export const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext)

  // Zapewniamy, że kontekst istnieje i ma prawidłowy typ
  if (!themeContext) {
    console.error('ThemeToggle must be used within a ThemeProviderWrapper')
    return null // Bezpieczne wyjście zamiast rzucania błędu
  }

  const { toggleTheme, isDarkMode } = themeContext

  // Zapamiętujemy style, aby nie tworzyć nowych obiektów w każdym renderze
  const buttonStyles = useMemo(
    () => ({
      transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
      transform: `rotate(${isDarkMode ? 180 : 0}deg)`, // Animacja obrotu
      color: 'inherit',
      '&:hover': {
        color: isDarkMode ? '#ffcc00' : '#ff5722',
      },
    }),
    [isDarkMode],
  )

  return (
    <IconButton
      onClick={toggleTheme}
      sx={buttonStyles}
      aria-label={isDarkMode ? 'Włącz tryb jasny' : 'Włącz tryb ciemny'} // Poprawa dostępności
    >
      {isDarkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  )
}
