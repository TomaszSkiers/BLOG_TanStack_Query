import './App.css'
import { Container, CssBaseline, Typography } from '@mui/material'
import { AppProvider } from './contexts/AppProvider'
import { ThemeToggle } from './components/ThemeToogle'




function App() {
  return (
    <AppProvider>
      <CssBaseline />
      <Container>
        <Typography variant="h4" gutterBottom>
          Application test, theme light - dark, theme provider.
        </Typography>
        <ThemeToggle />
        
      </Container>
    </AppProvider>
  )
}

export default App
