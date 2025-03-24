import { Hono } from 'hono'
import { getPosts } from '../controllers/postController.js'

export const postsRoutes = new Hono()

postsRoutes.get('/posts', (c) => {
  try {
    const posts = getPosts()

    if (posts.length === 0) {
      return c.json({ message: 'brak postów do wyświetlenia' }, 404)
    }

    return c.json(posts)
  } catch (error) {
    return c.json({ error: error.message }, 500)
  }
})
