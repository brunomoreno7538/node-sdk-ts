export class InvalidParamError extends Error {
  constructor (message: string, paramName: string) {
    super(`Invalid param: ${paramName} \nError: ` + message)
    this.name = 'InvalidParamError'
  }
}
