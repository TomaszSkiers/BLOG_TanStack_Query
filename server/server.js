import { Hono } from "hono"
import { serve } from "@hono/node-server"
import { promises as fs} from 'fs'

const app = new Hono()

app.get('/articles', async (c) => {
    try {
        const data = await fs.readFile('db.json', 'utf-8')
        const jsonData =JSON.parse(data)
        return c.json(jsonData.articles)
    }catch(error){
        return c.text('Błąd podczas odczytu pliku')
    }
})

serve({
    fetch: app.fetch,
    port: 3000,
})

console.log('Hono działa na porcie 3000')