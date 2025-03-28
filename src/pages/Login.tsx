import {
  Box,
  Button,
  Container,
  FormControlLabel,
  TextField,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { getLoginStyles } from '../styles/login'
import LoginIcon from '@mui/icons-material/Login'
import Checkbox from '@mui/material/Checkbox'
import { LoginData } from '../types/loginTypes'
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

export const Login = () => {
  const theme = useTheme()
  const styles = getLoginStyles(theme)
  //console.log(theme)

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
    remember: false,
  })

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prv) => ({ ...prv, [name]: value }))
  }

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prv) => ({ ...prv, remember: e.target.checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Logowanie...', formData)
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', m: 3 }}>
        <LoginIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
        <TextField
          fullWidth
          label="e-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Hasło"
          name="password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={formData.password}
          onChange={handleChange}
          sx={{mt: 2}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  aria-label="Pokaż/ukryj hasło"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.remember}
              onChange={handleCheckBoxChange}
              sx={styles.checkBox}
            />
          }
          label="Zapamiętaj mnie"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          startIcon={<LoginIcon />}
          sx={{ mt: 2 }}
        >
          Zaloguj
        </Button>
      </Box>
    </Container>
  )
}
