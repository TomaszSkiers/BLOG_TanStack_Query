import jwt from 'jsonwebtoken'

const JWT_SECRET = 'tajny-klucz' // W produkcji użyj zmiennej środowiskowej!

// Generowanie tokenu
export const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' }) // Poprawione: expiresIn zamiast expires
}

// Weryfikacja tokenu
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET) // Zwróci zdekodowany token, jeśli jest poprawny
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
