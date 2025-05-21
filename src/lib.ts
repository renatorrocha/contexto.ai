import { createClient } from '@libsql/client'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { promises as fs } from 'node:fs'

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1536,
  chunkOverlap: 100,
})

export const turso = createClient({
  url: Bun.env.TURSO_DB_URL,
  authToken: Bun.env.TURSO_DB_AUTH_TOKEN,
})

export async function extractChunks(markdownContent: string) {
  return await splitter.splitText(markdownContent)
}

export async function getEmbeddings(chunks: string[]) {
  return Promise.all(
    chunks.map(async chunk => {
      const response = await fetch('http://localhost:11434/api/embeddings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'nomic-embed-text',
          prompt: chunk,
        }),
      })

      const data = await response.json()

      return {
        chunk,
        embedding: data.embedding,
      }
    })
  )
}

export async function readFile(fileName: string) {
  const content = await fs.readFile(`./contents/${fileName}`, 'utf-8')
  return content
}
