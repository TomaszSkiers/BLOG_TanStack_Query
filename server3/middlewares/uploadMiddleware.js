import { parse } from 'hono/middleware/multipart'
import { mkdirSync, writeFileSync } from 'fs'
import { nanoid } from 'nanoid'
import path from 'path'

const UPLOAD_DIR = './uploads'
mkdirSync(UPLOAD_DIR, { recursive: true })

export const uploadMiddleware = async (caches, next) => {
  const body = await parse(c.req.raw)

  const fields = {}
  let uploadetFileUrl = null

  for (const [key, value] of body.entries()) {
    if (typeof value === 'string') {
      fields[key] = value
    } else {
      const ext = path.extname(value.name)
      const filename = `${nanoid()}${ext}`
      const filepath = path.join(UPLOAD_DIR, filename)

      const buffer = await value.arrayBuffer()
      writeFileSync(filepath, Buffer.from(buffer))

      uploadetFileUrl = `/uploads/${filename}`
    }
  }

  c.req.parsedBody = fields
  c.req.uploadetFileUrl = uploadetFileUrl

  await next()
}
