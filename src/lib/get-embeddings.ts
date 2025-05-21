import { embeddingUrl } from '@/config'

export default async function getEmbeddings(chunks: string[]) {
  return Promise.all(
    chunks.map(async chunk => {
      const response = await fetch(embeddingUrl, {
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
