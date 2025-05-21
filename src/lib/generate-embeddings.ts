import { turso } from '@/config'
import { lib } from '.'
import { program } from 'commander'

export default async function generateEmbeddings() {
  try {
    const chunks = await lib.extractChunks(await lib.readFile('test.md'))

    const embeddings = await lib.getEmbeddings(chunks)

    for (const item of embeddings) {
      await turso.execute(
        'INSERT INTO content (content, url, embedding) VALUES (?,?,?)',
        [item.chunk, 'test.md', JSON.stringify(item.embedding)]
      )
    }

    return true
  } catch (error) {
    return false
  }
}
