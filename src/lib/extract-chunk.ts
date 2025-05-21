import { splitter } from '@/config/langchain';

export default async function extractChunks(markdownContent: string) {
  return await splitter.splitText(markdownContent)
}
