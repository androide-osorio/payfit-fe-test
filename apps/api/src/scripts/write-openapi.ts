import { fetch } from 'undici'
import fs from 'fs/promises'
import path from 'path'

const SWAGGER_OPEN_API = 'http://localhost:4000/docs/json'

async function writeOpenApiSchemaFile() {
  const response = await fetch(SWAGGER_OPEN_API)
  const data = await response.json()

  await fs.writeFile(
    path.resolve(__dirname, '../../../../packages/sdk/src/generated/schema.json'),
    JSON.stringify(data, null, 2)
  )
}

writeOpenApiSchemaFile()
