import { Container, Typography } from '@mui/material'
import { PostList } from '../components/PostsList'

export const Blog = () => {
  return (
    <Container maxWidth='md'>
      <Typography>Witam ze strony Bloga</Typography>
      <PostList/>
    </Container>
  )
}
