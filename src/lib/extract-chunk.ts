import { splitter } from '@/config/langchain'

export default async function extractChunks(textContent: string) {
  return await splitter.splitText(textContent)
}
