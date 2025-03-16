import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const MainLayout = () => {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Header />
      <Box component='main' flexGrow={1} py={4}>
        <Container>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
