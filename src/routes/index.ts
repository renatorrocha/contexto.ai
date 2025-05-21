import Elysia from 'elysia'
import { extractChunks, getEmbeddings, readFile, turso } from '@/lib'

export const routes = new Elysia().get('/', async () => {
  const chunks = await extractChunks(await readFile('test.md'))

  const embeddings = await getEmbeddings(chunks)

  for (const item of embeddings) {
    await turso.execute(
      'INSERT INTO content (content, url, embedding) VALUES (?,?,?)',
      [item.chunk, 'test.md', JSON.stringify(item.embedding)]
    )
  }
  return 'done'
})
