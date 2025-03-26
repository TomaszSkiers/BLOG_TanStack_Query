import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { postsController } from './controllers/postsController.js'
import { corsMiddleware } from './middlewares/corsMiddleware.js'
import { authController } from './controllers/authController.js'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { requireAdmin } from './middlewares/requireAdmin.js'

const app = new Hono()

app.use('*', corsMiddleware)
/**
 * dla wszystkich middlewares ustawiam CROS
 * Cross-Origin Resource Sharing -> można generować żądania z odresu 
 * http://localhost:5713 do http//:localhost:3000
 * Vite -> server Hono
 */

app.route('/', postsController)
/**
 * przekierowanie do endpointa http://localhost:3000/posts
 */

app.route('/auth', authController)
/**
 * przekierowanie do endpointów:
 * http://localhost:3000/auth/register 
 * http://localhost:3000/auth/login
 */

app.use('/profile', authMiddleware) 
/**
 * uruchamiam weryfikację tokena i wyciągam z niego potrzebne iformacje
 * np: id, admin, user, email, itp, które będą wykorzystane w endpointach
 * poniżej
 */

app.get('/profile', (c) => {
  const userId = c.get('userId')
  console.log('userid z app ' ,userId)
  return c.json({message: `Witaj użytkowniku ${userId}`})
})
/**
 * curl -X GET http://localhost:3000/profile \
 * -H "Authorization: Bearer <token>"
 * 
 * to jest endpoint 
 * http://localhost:3000/profile
 * wykorzystuje token do autoryzacji użytkownika
 */

app.get('/admin-panel', authMiddleware, requireAdmin, (c) => {
  return c.json({message: 'Witaj adminie'})
})
/**
 * curl -X GET http://localhost:3000/admin-panel \
 * -H "Authorization: Bearer <token>"
 * to jest endpoint
 * http://localhost:3000/admin-panel
 * wykorzystuje token do autoryzacji użytkownika
 */


serve({
  fetch: app.fetch,
  port: 3000,
})
/**
 * uruchomienie serwera 
 */

console.log('✅ Serwer działa na http://localhost:3000')
