import { Hono } from 'hono'
import { readFileSync, fs } from 'fs'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'

import { articlesRoutes } from './routes/articles.js'

const app = new Hono()

app.use(
  cors({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
)

let db = null

const dbPath = path.resolve('server2/data/db.json')


// try {
//   const dbJson = readFileSync('./db.json', 'utf-8')

//   db = JSON.parse(dbJson)
// } catch (error) {
//   console.log('Błąd podczas wczytywania pliku db.json', error)
//   process.exit(1)
// }

app.route('/articles', articlesRoutes(db))

app.get('/', (c) => {
  return c.text('Hello from minimal Hono backend')
})

app.onError((err, c) => {
  console.log('Nieoczekiwany błąd aplikacji', err)
  return c.json(
    {
      error: 'Wystąpił błąd po stronie serwera',
      message: err.message,
    },
    500,
  )
})

app.notFound((c) => {
  return c.json({ error: 'Nie znaleziono zasobu' }, 404)
})

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('Hono działa na porcie 3000')
