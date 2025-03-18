import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  useMediaQuery,
} from '@mui/material'

import { getResponsiveStyles } from '../styles/header'
import { memo, useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import { ThemeToggle } from './ThemeToogle'
import { NavLinks } from './NavLinks'

export const Header = memo(() => {
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
            <NavLinks />

            <ThemeToggle />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
})
