import fs from 'fs'
import path from 'path'

const dbPath = path.resolve('server2/data/db.json')

export const getPosts = () => {
  try {
    if (!fs.existsSync(dbPath)) {
      
      throw new Error('plik db.json nie istnieje')
    }

    const dbData = fs.readFileSync(dbPath, 'utf-8')
    const { posts } = JSON.parse(dbData)

    if (!Array.isArray(posts)) {
     
      throw new Error('nieprawidłowy format plików db.json')
    }

    return posts
  } catch (error) {
    throw new Error(`błąd podczas odczytywania postów: ${error.message}`)
  }
}
