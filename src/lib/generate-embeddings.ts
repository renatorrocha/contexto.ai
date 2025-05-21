import { turso } from '@/config'
import { lib } from '.'

export default async function generateEmbeddings() {
  const chunks = await lib.extractChunks(await lib.readFile('test.md'))

  const embeddings = await lib.getEmbeddings(chunks)

  for (const item of embeddings) {
    await turso.execute(
      'INSERT INTO content (content, url, embedding) VALUES (?,?,?)',
      [item.chunk, 'test.md', JSON.stringify(item.embedding)]
    )
  }
  return 'done'
}
