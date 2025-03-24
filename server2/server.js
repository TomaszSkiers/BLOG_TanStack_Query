import { Hono } from 'hono'
import { postsRoutes } from './routes/postsRoutes.js'
import { cors } from 'hono/cors'
import { createServer } from 'node:http' // Dodajemy moduł HTTP z Node.js
import { createFetch } from '@whatwg-node/fetch' // Dodajemy obsługę Fetch API

const app = new Hono()

app.use(
  cors({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
)

// Rejestracja tras związanych z postami
app.route('/', postsRoutes)

// Domyślna trasa
app.get('/', (c) => {
  return c.text('Witaj na stronie głównej!')
})

// Obsługa błędów 404 (nieznalezione trasy)
app.notFound((c) => {
  return c.json({ error: 'Strona nie została znaleziona.' }, 404)
})

// Globalna obsługa błędów
app.onError((error, c) => {
  console.error('Błąd serwera:', error)
  return c.json({ error: 'Wystąpił błąd serwera.' }, 500)
})

// Tworzymy serwer HTTP i przekazujemy do niego aplikację Hono
const port = 3000
const server = createServer(app.fetch) // Używamy app.fetch do obsługi żądań

server.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`)
})
