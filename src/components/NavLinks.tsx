import { useTheme } from '@mui/material/styles'
import { memo, useMemo } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../constants/navLinks'

import { getHeaderStyles } from '../styles/header'
import { Link, useMediaQuery } from '@mui/material'

import { useAuth } from '../hooks/useAuth'

export const NavLinks = memo(() => {
  const location = useLocation()
  const theme = useTheme()
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))
  const styles = useMemo(
    () => getHeaderStyles(isSmallScreen),
    [isSmallScreen, theme],
  )
  const { isAuthenticated } = useAuth()

  return (
    <>
      {/* static LINKS */}
      {NAV_LINKS.map(({ path, label }) => {
        const isActive = location.pathname === path //compare active link with paht from constans/NAV_LINKS
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

      {/* dynamic link which depends from login state */}
      {isAuthenticated ? (
        <Link
          component={RouterLink}
          to="/dashboard"
          sx={styles.links(location.pathname === '/dashboard', theme)}
          aria-current={location.pathname === '/dashboard' ? 'page' : undefined}
        >
          Pulpit
        </Link>
      ) : (
        <Link
          component={RouterLink}
          to="/login"
          sx={styles.links(location.pathname === '/login', theme)}
          aria-current={location.pathname === '/login' ? 'page' : undefined}
        >
          Zaloguj
        </Link>
      )}
    </>
  )
})
