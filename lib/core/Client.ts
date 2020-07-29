import https from 'https'
import { HttpsConfigModel, HttpsClientModel, EnviromentModel, Callback } from './protocols/index'

/**
 * Class HttpsConfig - set path & method config for a https request
 */
export class HttpsConfig {
  private static readonly API_VERSION = '/v1.1/'
  private readonly path: string
  private readonly method: string

  /**
   * HttpsConfig constructor
   * @param {HttpsConfigModel} config
   * @var {string} this.path
   * @var {string} this.method
   */

  public constructor (config: HttpsConfigModel) {
    this.path = HttpsConfig.API_VERSION + config.path
    this.method = config.method
  }

  /**
   * Method setConfig
   * @param {void}
   * @returns {HttpsConfigModel}
   */

  public setConfig (): HttpsConfigModel {
    return {
      path: this.path,
      method: this.method
    }
  }
}

/**
 * Class Enviroment - set hostname & headers config for a https request
 */
export class Enviroment {
  /**
   * Static method setEnviroment
   * @param {string} mode
   * @param {string} apiKey
   * @param {string} apiToken
   * @returns {EnviromentModel} enviroment
   */

  public static setEnviroment (mode: string, apiKey: string, apiToken: string): EnviromentModel {
    const enviroment: EnviromentModel = {
      hostname: (mode === 'SANDBOX') ? 'apisandbox.paymee.com.br' : 'api.paymee.com.br',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'x-api-token': apiToken }
    }
    return enviroment
  }
}
/**
 * Class HttpsClient - make a https request
 */
export class HttpsClient implements HttpsClientModel {
  private readonly config: HttpsConfigModel
  private readonly requestData: any
  private readonly callback: Callback

  /**
 * HttpsClient constructor
 * @param {HttpsConfigModel} config
 * @param {Data} data
 * @param {Callback} cb
 */
  public constructor (config: HttpsConfigModel, data: any, cb: Callback) {
    this.config = config
    this.requestData = data
    this.callback = cb
  }

  /**
 * httpsRequest method
 * @returns {void}
 */
  public httpRequest (): void {
    const req = https.request(this.config, (res) => {
      let responseData: string = ''
      res.on('data', (data: any) => {
        responseData += <string>data
      })
      res.on('end', () => {
        this.callback(JSON.parse(responseData), null)
      })
    }).on('error', (err) => {
      this.callback(null, err)
    })
    req.write(JSON.stringify(this.requestData))
    req.end()
  }
}
