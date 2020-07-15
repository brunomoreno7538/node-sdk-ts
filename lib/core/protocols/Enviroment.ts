export interface EnviromentModel {
  hostname: string
  headers: {
    'Content-Type': 'application/json'
    'x-api-key': string
    'x-api-token': string
  }
}
