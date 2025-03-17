import { Theme, SxProps } from '@mui/material/styles'

interface ResponsiveStyles {
  container: SxProps<Theme>
  leftBox: SxProps<Theme>
  rightBox: SxProps<Theme>
  links: (isActive: boolean, theme: Theme) => SxProps<Theme>
  appBar: SxProps<Theme>
}

export const getResponsiveStyles = (
  isSmallScreen: boolean,
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
    links: (isActive: boolean, theme: Theme) => ({
      color: isActive
        ? theme.palette.mode === 'dark'
          ? theme.palette.secondary.light // W dark mode linki będą jaśniejsze
          : theme.palette.secondary.dark // W light mode linki będą ciemniejsze
        : theme.palette.mode === 'dark'
          ? theme.palette.grey[300] // W dark mode nieaktywne linki będą jaśniejsze
          : theme.palette.grey[50], // W light mode standardowy kolor

      textDecoration: isActive ? 'underline' : 'none',
      textDecorationThickness: isActive ? '2px' : '0',
      textUnderlineOffset: '4px',
      transition: 'color 0.3s ease, text-decoration 0.3s ease',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    }),
  }
}
