import { Button, Container } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Dashboard: FC = () => {
  const navigate = useNavigate()
  const {logout} = useAuth()

  const handleLogout = (): void => {
    logout()
    navigate('blog', {replace: true})
  }

  return (
    <>
      <Container maxWidth='md'>
      <h1>witaj z komponentu bashboard</h1>
      <h2>
        tutaj będą narzędzia np: dadawanie komentarzy <br />
        lub dodawanie postów{' '}
      </h2>
      <Button onClick={handleLogout}>Wyloguj mnie</Button>
      </Container>
    </>
  )
}



//todo it doesen't redirect me to the right page
