import { Hono } from 'hono'
import fs from 'fs/promises'
import path from 'path'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { generateToken } from '../utils/jwt.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { requireAdmin } from '../middlewares/requireAdmin.js'

const usersPath = path.resolve(process.cwd(), 'server3/data/users.json')

export const authController = new Hono()

//* Endpoint do dodawania użytkownika
authController.post('/register', async (c) => {
  const body = await c.req.json() // Pobierz całe body
  console.log('endpoint /register')
  console.log('dane z frontendu', body)

  const { email, password } = body

  // Sprawdź, czy email i hasło zostały przesłane
  if (!email || !password) {
    return c.json({ error: 'Email, hasło i rola są wymagane' }, 400)
  }

  console.log('Email:', email)
  console.log('Hasło:', password)

  // Sprawdź, czy użytkownik już istnieje
  const users = JSON.parse(await fs.readFile(usersPath, 'utf-8'))
  const userExists = users.some((user) => user.email === email)

  if (userExists) {
    return c.json({ error: 'Użytkownik już istnieje' }, 400)
  }

  // Hashowanie hasła
  const hashedPassword = await bcrypt.hash(password, 10)

  // Utwórz nowego użytkownika
  const newUser = {
    id: uuidv4(), // Unikalne ID
    email, // Przypisz email z żądania
    password: hashedPassword, // Przypisz zahashowane hasło
    role: 'user', // Przypisz rolę
  }

  console.log('Nowy użytkownik:', newUser)

  // Dodaj użytkownika do listy
  users.push(newUser)

  // Zapisz zaktualizowaną listę użytkowników
  await fs.writeFile(usersPath, JSON.stringify(users, null, 2))

  return c.json({ message: 'Użytkownik zarejestrowany', user: newUser })
})

/**
 * curl -X POST http://localhost:3000/auth/register \
 * -H "Content-Type: application/json" \
 * -d '{"email":"test@example.com", "password":"haslo123"}
 * 
 * to utworzy mi obiekt w bazie danych
  [
    {
      "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      "email": "test@example.com",
      "password": "$2a$10$...",
      "role": "user",
    }
  ]
 */

//* Endpoint do logowania użytkownika
authController.post('/login', async (c) => {
  const body = await c.req.json()
  console.log('endpoint /login otrzymane dane:', body)
  const { email, password } = body

  // Sprawdź, czy email i hasło zostały przesłane
  if (!email || !password) {
    return c.json({ error: 'Email i hasło są wymagane' }, 400)
  }

  console.log('Email:', email)
  console.log('Hasło:', password)

  // Sprawdzam czy użytkownik istnieje
  const users = JSON.parse(await fs.readFile(usersPath, 'utf-8'))
  const user = users.find((user) => user.email === email)

  if (!user) {
    return c.json({ error: 'Nieprawidłowy email' }, 400)
  }

  // Sprawdzam hasło
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return c.json({ error: 'Nieprawidłowe hasło' }, 400)
  }

  // Wygeneruj token JWT
  const token = generateToken(user)
  console.log('wygenerowano nowy token:', token)
  return c.json({ token })
})

/**
 * curl -X POST http://localhost:3000/auth/login \
 * -H "Content-Type: application/json" \
 * -d '{"email": "test@example.com", "password": "haslo123"}'
 */

/**
 * komendy httpie
 * http POST http://localhost:3000/auth/login \
 * email=test@example.com \
 * password=haslo123
 */

/**
 * zapis tokena do zmiennej w celu późniejszego użycia
 * zainstaluj sudo apt install jq
 * 
 * TOKEN=$(http --body POST http://localhost:3000/auth/login \
 * email=test@example.com password=haslo123 | jq -r .token)
 * 
 * http GET http://localhost:3000/profile \
 * "Authorization: Bearer $TOKEN"
 */

//* Endpoint do wyświetlania wszystkich użytkowników
authController.get('/users',authMiddleware, requireAdmin, async (c) => {
  try {
    const data = await fs.readFile(usersPath, 'utf-8')
    const users = JSON.parse(data)
    return c.json(users)
  } catch (error) {
    return c.json(
      { error: 'nie można odczytać pliku users.json -> /users' },
      500,
    )
  }
})

/**
 * endpoint wykorzystuje autoryzację, i wymaga uprawnień admina
 * do wyświetlenia użytkowników z bazy danych
 */

//* Endpoint do usuwania użytkownika
authController.delete('/users/:id', authMiddleware, requireAdmin, async (c)=>{
  const idToDelete = c.req.param('id')

  try {
    const users = JSON.parse(await fs.readFile(usersPath, 'utf-8'))
    const index = users.findIndex((user) => user.id === idToDelete)
    if(index === -1) {
      return c.json({error: 'Użytkownik nie znaleziony'}, 404)
    }
    const deletedUser = users.splice(index, 1)[0]
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2))
    return c.json({message: 'Użytkownik usunięty', user: deletedUser})
  }catch (error) {
    console.error('Błąd przy usuwaniu użytkownika', err)
    return c.json({error: 'Wystąpił błąd serwera'}, 500)
  }
})

/**
 * http DELETE http://localhost:3000/auth/users/<userId> \
 * "Authoriztion: Bearer <token_admina>"
 * 
 * to muszę sobie jeszcze przeanalizować 
 */


//! aktualizacja użytkownika trzeba poprawić !!!
//* zalogowany jako admin mogę zmienić każdego usera
//* zalogowany jako user mogę zmienić tylko siebie

authController.patch('/users/:id', authMiddleware, async(c)=>{
  const userId = c.req.param('id')
  const updates = await c.req.json()

  try{
    const users = JSON.parse(await fs.readFile(usersPath, 'utf-8'))
    const user = users.find((user) => user.id === userId)
    if(!user) {
      return c.json({error: 'Użytkownik nie znaleziony'}, 404)
    }
    if (updates.email) user.email = updates.email
    if (updates.password) user.password = await bcrypt.hash(updates.password, 10)
    if (updates.role) user.role = updates.role

    await fs.writeFile(usersPath, JSON.stringify(users, null, 2))
    return c.json({message: 'Użytkownik zaktualizowany', user})
  }catch(error){
    console.log('Błąd przy aktualizacji:', error)
    return c.json({error: 'Błąd serwera'}, 500)
  }
})

/**
 * httpie
 * 
 * http PATCH http://localhost:3000/auth/users/<id> \
 * "Authorization:Bearer $TOKEN" \
 * role=admin
 */