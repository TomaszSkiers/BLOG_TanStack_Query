import { Hono } from 'hono'
import fs from 'fs/promises'
import path from 'path'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { generateToken } from '../utils/jwt.js'

const usersPath = path.resolve(process.cwd(), 'server3/data/users.json')

export const authController = new Hono()

//* Endpoint do dodawania użytkownika
authController.post('/register', async (c) => {
  const body = await c.req.json() // Pobierz całe body
  console.log('endpoint /register trzymane dane:', body)

  const { email, password } = body

  // Sprawdź, czy email i hasło zostały przesłane
  if (!email || !password) {
    return c.json({ error: 'Email i hasło są wymagane' }, 400)
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
  }

  console.log('Nowy użytkownik:', newUser)

  // Dodaj użytkownika do listy
  users.push(newUser)

  // Zapisz zaktualizowaną listę użytkowników
  await fs.writeFile(usersPath, JSON.stringify(users, null, 2))

  return c.json({ message: 'Użytkownik zarejestrowany', user: newUser })
})

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
  const token = generateToken(user.id)
  console.log('wygenerowano nowy token:', token)
  return c.json({ token })
})
