import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  useMediaQuery,
  Link,
} from '@mui/material'
import { Link as RouterLink, useLocation, Location } from 'react-router-dom'
import { getResponsiveStyles } from '../styles/header'
import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import { ThemeToggle } from './ThemeToogle'

export const Header = () => {
  const location: Location = useLocation()
  const isSmallScreen: boolean = useMediaQuery('(max-width: 800px)')
  const theme = useTheme()
  const styles = useMemo(
    () => getResponsiveStyles(isSmallScreen, theme),
    [isSmallScreen],
  )

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Container maxWidth="md" sx={styles.container}>
          {/* Left side - name and motivational quote*/}
          <Box sx={styles.leftBox}>
            <Typography sx={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>
              Tomasz Skierś
            </Typography>
            <Typography color={theme.palette.grey[400]}>
              {!isSmallScreen
                ? 'Sukces to suma małych wysiłków powtarzanych każdego dnia.'
                : ''}
            </Typography>
          </Box>

          {/* right side - links */}
          <Box sx={styles.rightBox}>
            {[
              { path: '/', label: 'O mnie' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Kontakt' },
            ].map(({ path, label }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...styles.links,
                    color: isActive
                      ? theme.palette.secondary.dark
                      : theme.palette.grey[50],
                    textDecoration: isActive ? 'underline' : 'none',
                    textDecorationThickness: isActive ? '2px' : '0',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {label}
                </Link>
              )
            })}
            <ThemeToggle />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
