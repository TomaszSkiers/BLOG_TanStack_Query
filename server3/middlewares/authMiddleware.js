import { verifyToken } from '../utils/jwt.js'

export const authMiddleware = async (c, next) => {
  console.log(c.req.header('Authorization'))
  const token = c.req.header('Authorization')?.split(' ')[1]
  console.log('token: ', token)
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

/**
 * c.req.header('Authorization') pobiera token przesłany z forntendu
 * np: jak wykonuję żądanie
 * curl -X http://localhost:3000/profile \
 * -H "Authorization: Bearer <token>"
 *
 * {
 *    Authorization: Berarer <token>
 * }
 * z pola Authorization tekstowo zostanie pobrany string 'Bearer <token>'
 * trzeba odciąć słówko Bearer, i zostaje token, później rozkodować
 * za pomocą funkcji verfyToken(token)
 * funkcja zwróci obiekt z danymi zakodowanymi w tokenie
 * {
 *  email: tomasz.skiers@gmail.com,
 *  id: ax11-kuku,
 *  role: admin/user
 * }
 * c.set('userId', resul.decoded.userId)
 * pobiera id z obiektu zwróconego przez verifyToken(token)
 * result = {
 *  valid: true/false,
 *  decoded: {
 *    id: zsdfs-alsff;
 *    role: admin/user
 *  }
 * }
 * tworzy zmienną 'userId' w obiekcie żądania i przekazuje z powrotem do
 * endpointu np: app.get('/profile) -> http://localhost/profile w app.js
 * gdzie jest pobierana za pomocą c.get('userId')
 * trzeba wywołać funkcję next(), za jej pomocą wracamy do wykonywania
 * dalszej części programu
 */
