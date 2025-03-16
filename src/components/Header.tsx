import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6' sx={{flexGrow: 1}}>Blog</Typography>
      </Toolbar>
    </AppBar>
  )
}
