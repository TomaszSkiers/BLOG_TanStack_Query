import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

// Generowanie tokenu
export const generateToken = (user) => {
  return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' }) // Poprawione: expiresIn zamiast expires
}
/**
 * generowany jest token, w którm zakodowany jest nr id i admin/user,
 * wszystko zostaje zakodowane i podpisane jest kluczem JWT_SECRET,
 * expiresIn -> ważność tokenu '1h' godzina
 * jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15m' });
 * jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
 * jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1y' });
 * token, który nie wygasa 
 * jwt.sign({ userId }, JWT_SECRET);
 */


// Weryfikacja tokenu
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return {valid: true, decoded} // Zwróci zdekodowany token, jeśli jest poprawny
  } catch (err) {
    console.error('Błąd weryfikacji tokenu:', err.message) 

    if (err.name === 'TokenExpiredError') {
      return { valid: false, error: 'Token wygasł', expiredAt: err.expiredAt }
    } else if (err.name === 'JsonWebTokenError') {
      return { valid: false, error: 'Niepoprawny token' }
    } else {
      return { valid: false, error: 'Inny błąd weryfikacji tokenu' }
    }
  }
}
