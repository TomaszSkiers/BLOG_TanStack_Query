import { Typography, Box } from '@mui/material'
import { PostList } from '../components/PostsList'

export const Blog = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden', 
        height: '100%'      
      }}
    >
      <Typography>Witam ze strony Bloga</Typography>

      <Box
        sx={(theme) => ({
          flex: 1,
          overflowY: 'auto',
          mt: 2,
          pr: 1,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.background.default,
          },
          scrollbarWidth: 'thin',
          scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.default}`,
        })}
      >
        <PostList />
      </Box>
    </Box>
  )
}

