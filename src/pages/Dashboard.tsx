import { Button } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard: FC = () => {
  const navigate = useNavigate()

  const logout = (): void => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    navigate('/blog', {replace: true})
  }

  return (
    <>
      <h1>witaj z komponentu bashboard</h1>
      <h2>
        tutaj będą narzędzia np: dadawanie komentarzy <br />
        lub dodawanie postów{' '}
      </h2>
      <Button onClick={logout}>Wyloguj mnie</Button>
    </>
  )
}


