import {Hono} from 'hono'

export function articlesRoutes(db) {
    const articlesApp = new Hono()
    articlesApp.get('/', (c) => {
        return c.json(db.articles)
    })

    return articlesApp
}