import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'SUPER_SECRET_KEY'

export async function authMiddleware(c, next) {
    const authHeader = c.req.header('Authorization')
    if (!authHeader){
        return c.json({error: 'Brak nagłówka authorization'}, 401)
    }

    const token = authHeader.replace('Bearer', '').trim()

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        c.set('user', decoded)
        await next()
    }catch(error){
        return c.json({error: 'Niepoprawny lub wygasły token'}, 401)
    }
}