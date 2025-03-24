import { verifyToken } from '../utils/jwt.js'

export const authMiddleware = async (c, next) => {
  const token = c.req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return c.json({ error: 'Brak tokenu autoryzacyjnego' }, 401)
  }

  const result = verifyToken(token) // Weryfikuj token

  if (result.valid === false) {
    return c.json({ error: result.error, expiredAt: result.expiredAt }, 401)
  }

  c.set('userId', result.decoded.userId) // Zapisz ID użytkownika w kontekście
  await next() // Przejdź do następnego middleware lub endpointu
}
