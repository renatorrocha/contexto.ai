import { turso } from '@/config'
import extractChunks from './extract-chunk'
import { getFiles, readFile } from './file-system'
import getEmbeddings from './get-embeddings'

export default async function generateEmbeddings(path: string) {
  try {
    const files = await getFiles(path)

    for (const file of files) {
      const content = await readFile(`${path}/${file}`)
      const chunks = await extractChunks(content)
      const embeddings = await getEmbeddings(chunks)

      for (const item of embeddings) {
        await turso.execute(
          'INSERT INTO content (content, url, embedding) VALUES (?,?,?)',
          [item.chunk, file, JSON.stringify(item.embedding)]
        )
      }
    }

    return true
  } catch (error) {
    return false
  }
}
