import { verifyToken } from '../utils/jwt.js'

export const authMiddleware = async (c, next) => {
  const token = c.req.header('Authorization')?.split(' ')[1]
  if (!token) {
    return c.json({ error: 'Brak tokenu autoryzacyjnego' }, 401)
  }

  const result = verifyToken(token)
  console.log('decoded JWT', result)

  if (!result.valid) {
    return c.json({ error: result.error, expiredAt: result.expiredAt }, 401)
  }

  c.set('userId', result.decoded.userId)
  c.set('role', result.decoded.role)
  await next()
}

