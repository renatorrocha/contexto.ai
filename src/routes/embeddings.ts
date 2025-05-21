import { Elysia } from 'elysia'

export const embeddingsRoutes = new Elysia()
  .get('/embeddings', () => {
    const content = readFile(extractFileName('test.md'))
    return content
  })
