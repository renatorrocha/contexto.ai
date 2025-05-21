import { promises as fs } from 'node:fs'

export default async function readFile(fileName: string) {
  const content = await fs.readFile(`./contents/${fileName}`, 'utf-8')
  return content
}
