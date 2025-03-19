import { Theme } from '@mui/material/styles'
import { FooterStyles } from '../types/footerTypes' 

export const getFooterStyles = (theme: Theme): FooterStyles => ({
  footer: {
    position: 'sticky',
    bottom: '0px',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderTop: `1px solid ${theme.palette.divider}`,
    textAlign: 'center',
    padding: theme.spacing(1, 1),
  },
  copyright: {
    marginTop: theme.spacing(2), 
    fontSize: 'clamp(0.75rem, 2vw, 1rem)', 
    color: theme.palette.grey[500],
    m: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})
