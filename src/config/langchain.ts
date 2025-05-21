import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

export const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1536,
  chunkOverlap: 100,
})
