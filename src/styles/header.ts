import { Theme } from '@mui/material/styles'
import {HeaderStyles} from '../types/headerTypes'



export const getHeaderStyles = (
  isSmallScreen: boolean,
): HeaderStyles => {
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
      padding: '20px 0',
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
      position: 'relative', 
      color: isActive
        ? theme.palette.mode === 'dark'
          ? theme.palette.secondary.light
          : theme.palette.secondary.dark
        : theme.palette.mode === 'dark'
          ? theme.palette.grey[300]
          : theme.palette.grey[50],
      textDecoration: 'none',

      '&::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: '2px',
        backgroundColor: theme.palette.secondary.main,
        transition: 'width 0.3s ease-in-out, transform 0.3s ease-in-out',
        transformOrigin: 'left',
      },

      '&:hover::after': {
        width: '100%',
      },
    }),
  }
}
