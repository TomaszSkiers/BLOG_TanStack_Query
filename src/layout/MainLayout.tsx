import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const MainLayout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden' // <-- ważne, żeby nie rozciągało się za bardzo
        }}
      >
        <Container
          maxWidth="md"
          // disableGutters
          sx={{
            // border: '1px solid red',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden', // <-- kluczowe
            
          }}
        >
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

