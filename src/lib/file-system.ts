import { promises as fs } from 'node:fs'

export async function getFiles(path: string) {
  const files = await fs.readdir(path)

  const selectedFiles = files.filter(
    file => file.endsWith('.md') || file.endsWith('.txt')
  )

  return selectedFiles
}

export async function readFile(path: string) {
  return await fs.readFile(path, 'utf-8')
}
