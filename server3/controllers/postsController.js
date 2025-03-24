import {Hono} from 'hono'
import fs from 'fs/promises'
import path from 'path'

const dbPath = path.resolve(process.cwd(), 'server3/data/db.json')

export const postsController = new Hono()

postsController.get('/posts', async (c) => {
    try {
        const data = await fs.readFile(dbPath, 'utf-8')
        const dataJSON = JSON.parse(data)
        return c.json(dataJSON.articles)
    } catch (error) {
        return c.json({error: 'nie można odczytać pliku db.json -> postsController'}, 500)
    }
})