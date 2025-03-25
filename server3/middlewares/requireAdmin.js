export const requireAdmin = async (c, next) => {
    const role = c.get('role') 
        if (role !== 'admin') {
            return c.json({error: 'Brak dostępu. Tylko dla administratorów'}, 403)
        }
    await next()
}