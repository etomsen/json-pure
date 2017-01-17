import { compileFromFile } from 'json-schema-to-typescript'
import * as fs from 'fs'

async function generateRequest() {
  fs.writeFileSync('./src/request-schema.ts', await compileFromFile('./src/request-schema.json'))
}

async function generateResponse() {
  fs.writeFileSync('./src/response-schema.ts', await compileFromFile('./src/response-schema.json'))
}

generateRequest().then(() => console.log('generate "src/request-schema.ts"... done!'));
generateResponse().then(() => console.log('generate "src/response-schema.ts"... done!'));