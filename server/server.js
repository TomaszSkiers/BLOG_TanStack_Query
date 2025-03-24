import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { promises as fs } from 'fs'
import { cors } from 'hono/cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Budujemy absolutną ścieżkę do pliku db.json (zakładając, że znajduje się w tym samym katalogu co ten plik)
const dbPath = join(__dirname, 'db.json')

const app = new Hono()

app.use(
  cors({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
)

app.get('/posts', async (c) => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8')
    const jsonData = JSON.parse(data)
    return c.json(jsonData.articles)
  } catch (error) {
    console.error('Błąd podczas odczytu pliku:', error)
    return c.text('Błąd podczas odczytu pliku')
  }
})

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log('Hono działa na porcie 3000')
