// Przykładowy komponent korzystający z motywu

import { useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

/**
 * INSTRUKCJA:
 * 1. Używaj hooka useTheme() tylko wewnątrz komponentów, które są opakowane przez ThemeProvider.
 * 2. Odwołuj się do niestandardowych kolorów, np. theme.palette.highlight.main lub theme.palette.muted.main.
 *
 * OSTRZEŻENIE:
 * - Nie wywołuj useTheme() przed opakowaniem komponentów w ThemeProvider!
 *   Jeśli tego nie zrobisz, otrzymasz domyślny motyw MUI, który nie zawiera Twoich niestandardowych kolorów.
 */


const MyComponent = () => {
  // Upewnij się, że ten komponent jest opakowany przez ThemeProvider!
  const theme = useTheme()
  console.log('Aktualna paleta motywu:', theme.palette)

  return (
    <Box sx={{ p: 4, backgroundColor: theme.palette.highlight.main }}>
      <Typography variant="body1">
        To jest przykład użycia niestandardowego koloru "highlight".
      </Typography>
      <Box sx={{ mt: 2, p: 2, backgroundColor: theme.palette.muted.main }}>
        <Typography variant="body2">
          To jest przykład użycia niestandardowego koloru "muted".
        </Typography>
      </Box>
    </Box>
  )
}

export default MyComponent

const lightModeColors = {
  mode: 'light',
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
  },
  secondary: {
    main: '#ff4081',
    light: '#ff79b0',
    dark: '#c60055',
    contrastText: '#fff',
  },
  highlight: {
    main: '#ffeb3b',
  },
  muted: {
    main: '#9e9e9e',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#000000',
    secondary: '#5a5a5a',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#fff',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#fff',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#fff',
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#fff',
  },
  grey: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  divider: 'rgba(0, 0, 0, 0.12)',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

const darkModeColors = {
  mode: 'dark',
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#f48fb1',
    light: '#ff80ab',
    dark: '#c2185b',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  highlight: {
    main: '#ffeb3b',
  },
  muted: {
    main: '#757575',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#bdbdbd',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0288d1',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  grey: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  divider: 'rgba(255, 255, 255, 0.12)',
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
}

