import { useGetPosts } from '../hooks/useGetPosts'
import { Post } from '../types/postTypes'

export const PostList: React.FC = () => {
  const { data: posts, isLoading, error } = useGetPosts()

  if (isLoading) return <p>Ładowanie postów...</p>
  if (error) return <p>Błąd: {error.message}</p>

  return (
    <div>
      <h2>Lista postów</h2>
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.fullContent}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
