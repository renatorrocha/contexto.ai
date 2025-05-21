import { createClient } from '@libsql/client'

export const turso = createClient({
  url: Bun.env.TURSO_DB_URL,
  authToken: Bun.env.TURSO_DB_AUTH_TOKEN,
})
