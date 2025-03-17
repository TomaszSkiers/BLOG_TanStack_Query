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
import { NAV_LINKS } from '../constants/navLinks'

export const Header = () => {
  const location: Location = useLocation()
  const theme = useTheme()
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))
  const styles = useMemo(
    () => getResponsiveStyles(isSmallScreen),
    [isSmallScreen, theme],
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
          <Box
            component="nav"
            sx={styles.rightBox}
            aria-label="Główna nawigacja"
          >
            {NAV_LINKS.map(({ path, label }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  component={RouterLink}
                  to={path}
                  sx={styles.links(isActive, theme)}
                  aria-current={isActive ? 'page' : undefined}
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
