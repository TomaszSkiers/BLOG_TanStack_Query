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
          overflow: 'hidden',
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
