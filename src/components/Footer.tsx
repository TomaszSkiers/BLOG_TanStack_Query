import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { getFooterStyles } from '../styles/footer'
import { useMemo } from 'react'
import { ThemeToggle } from './ThemeToogle'

export const Footer = () => {
  const theme = useTheme()
  const styles = useMemo(() => getFooterStyles(theme), [theme])

  return (
    <Box component="footer" sx={styles.footer}>
      <Container maxWidth="md" sx={styles.container}>
        <Typography variant="body2" sx={styles.copyright}>
          © {new Date().getFullYear()} Tomasz Skierś. Wszelkie prawa
          zastrzeżone.
        </Typography>
        <ThemeToggle/>
      </Container>
    </Box>
  )
}
