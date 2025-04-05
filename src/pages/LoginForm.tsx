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
import { FC } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { Alert } from '@mui/material'
import { useLoginForm } from '../hooks/useLoginForm'

export const LoginForm: FC = () => {
  const theme = useTheme()
  const styles = getLoginStyles(theme)

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    loginError,
    loginPending,
  } = useLoginForm()

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', m: 3 }}>
        <LoginIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      </Box>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
        <TextField
          fullWidth
          label="e-mail"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Hasło"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={{ mt: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  aria-label="Pokaż/ukryj hasło"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormControlLabel
          control={<Checkbox {...register('remember')} sx={styles.checkBox} />}
          label="Zapamiętaj mnie"
        />

        {loginError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Nie udało sie zalogować. Sprawdź dane logowania.
          </Alert>
        )}

        <Button
          fullWidth
          type="submit"
          variant="contained"
          startIcon={<LoginIcon />}
          sx={{ mt: 2 }}
          disabled={isSubmitting || loginPending}
        >
          {isSubmitting || loginPending ? 'Logowanie...' : 'Zaloguj'}
        </Button>
      </Box>
    </Container>
  )
}
