import { Theme, SxProps } from '@mui/material/styles'

interface ResponsiveStyles {
  container: SxProps<Theme>
  leftBox: SxProps<Theme>
  rightBox: SxProps<Theme>
  links: SxProps<Theme>
  appBar: SxProps<Theme>
}

export const getResponsiveStyles = (
  isSmallScreen: boolean,
  theme: Theme,
): ResponsiveStyles => {
  return {
    appBar: {
      justifyContent: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: isSmallScreen ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      padding: '20px',
    },
    leftBox: {
      textAlign: isSmallScreen ? 'center' : 'left',
    },
    rightBox: {
      width: isSmallScreen ? '100%' : undefined,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isSmallScreen ? '30px' : '20px',
    },
    links: {
      transition: 'color 0.3s ease',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  }
}
