import { Button } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../utils/functions'

export const Dashboard: FC = () => {
  const navigate = useNavigate()

  const handleLogout = (): void => {
    logout()
    navigate('/blog', {replace: true})
  }

  return (
    <>
      <h1>witaj z komponentu bashboard</h1>
      <h2>
        tutaj będą narzędzia np: dadawanie komentarzy <br />
        lub dodawanie postów{' '}
      </h2>
      <Button onClick={handleLogout}>Wyloguj mnie</Button>
    </>
  )
}


