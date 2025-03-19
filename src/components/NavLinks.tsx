import { useTheme } from '@mui/material/styles'
import { memo, useMemo } from 'react'
import { Link as RouterLink, useLocation} from 'react-router-dom'
import { NAV_LINKS } from '../constants/navLinks'

import { getHeaderStyles } from '../styles/header'
import { Link, useMediaQuery } from '@mui/material'

export const NavLinks = memo(() => {
  const location = useLocation()
  const theme = useTheme()
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))
  const styles = useMemo(
    () => getHeaderStyles(isSmallScreen),
    [isSmallScreen, theme],
  )

  return (
    <>
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
    </>
  )
})
