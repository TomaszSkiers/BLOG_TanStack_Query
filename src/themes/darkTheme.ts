import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#f48fb1',
      light: '#ff80ab',
      dark: '#c2185b',
    },
    highlight: {        // ✨ Kolor podświetlenia dla ciemnego trybu
      main: '#ffeb3b',
    },
    muted: {            // 🌫️ Przygaszony kolor dla mniej ważnych elementów
      main: '#757575',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
});
