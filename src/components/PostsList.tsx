import { Box, Card, CircularProgress, Typography } from '@mui/material'
import { useGetPosts } from '../hooks/useGetPosts'
import { Post } from '../types/postTypes'
import { styles } from '../styles/singleEntryCard'

export const PostList: React.FC = () => {
  const { data: posts, isLoading, error } = useGetPosts()

  if (isLoading) return <CircularProgress />
  if (error) return <p>Błąd: {error.message}</p>

  return (
    <Box>
      {posts?.map((post: Post) => (
        <Card sx={styles.card} key={post.id}>
          <Box sx={styles.container}>
            <Box
              component="img"
              src="public/images/icons/B2D32B62-80C5-46B6-83FE-B39375CF757A.jpeg"
              alt="Post thumbnail"
              sx={styles.image}
            />
            <Box>
              <Typography sx={styles.title}>{post.title}</Typography>
              <Typography sx={styles.introduction}>{post.content}</Typography>
              <Typography sx={styles.fullContent}>{post.fullContent}</Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  )
}
