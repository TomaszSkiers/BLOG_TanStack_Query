import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from '@mui/material'
import { ThemeToggle } from './ThemeToogle'

export const Header = () => {
  return (
    <AppBar position="static" sx={{ height: '8rem', justifyContent: 'center' }}>
      <Toolbar>
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* Lewa strona - Imię i blog */}
          <Box>
            <Typography
              variant="h5"
              sx={{ fontFamily: "'Lato', sans-serif", fontWeight: 'bold' }}
            >
              Tomasz Skierś
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "'Lato', sans-serif", opacity: 0.7 }}
            >
              Blog o programowaniu
            </Typography>
          </Box>

          {/* Prawa strona - Linki */}
          <Box>
            <Button color="inherit" sx={{ fontFamily: "'Lato', sans-serif" }}>
              O mnie
            </Button>
            <Button color="inherit" sx={{ fontFamily: "'Lato', sans-serif" }}>
              Blog
            </Button>
            <Button color="inherit" sx={{ fontFamily: "'Lato', sans-serif" }}>
              Kontakt
            </Button>
            <ThemeToggle />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
