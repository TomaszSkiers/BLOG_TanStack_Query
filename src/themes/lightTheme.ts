import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
    },
    highlight: { // ✨ NOWY KOLOR (np. do podświetleń)
      main: '#ffeb3b',
    },
    muted: { // 🌫️ NOWY KOLOR (np. do mało ważnych elementów)
      main: '#9e9e9e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#5a5a5a',
    },
  },
});

