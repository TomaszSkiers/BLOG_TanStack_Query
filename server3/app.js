import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import fs from 'fs/promises'
import path from 'path'
import { cors } from 'hono/cors'
import { postsController } from './controllers/postsController.js'
import { corsMiddleware } from './middlewares/corsMiddleware.js'
import { authController } from './controllers/authController.js'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { requireAdmin } from './middlewares/requireAdmin.js'

const app = new Hono()

app.use('*', corsMiddleware)

app.route('/', postsController)

app.route('/auth', authController)

// chronione endpointy
app.use('/profile', authMiddleware) //Użyj middleware autoryzacji

app.get('/profile', (c) => {
  const userId = c.get('userId')
  console.log('userid z app ' ,userId)
  return c.json({message: `Witaj użytkowniku ${userId}`})
})

app.get('/admin-panel', authMiddleware, requireAdmin, (c) => {
  return c.json({message: 'Witaj adminie'})
})

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('✅ Serwer działa na http://localhost:3000')
