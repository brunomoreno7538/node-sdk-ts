import { HttpsClient, HttpsConfig } from '../../core/Client'
import { QueryTransactionData, QueryTransactionFilterData } from '../../core/protocols/QueryData'

export class QueryTransaction {
  private static readonly config = { path: '' , method: 'GET' }

  public static getTransaction (data: QueryTransactionData, enviroment: any, cb: any): any {
    this.config.path = `transactions/${data.uuid}/`
    const finalConfig = Object.assign(new HttpsConfig(this.config), enviroment)
    const executeHttp = new HttpsClient(finalConfig, data, cb)
    return executeHttp.httpRequest()
  }
}

export class QueryBalance {
  private static readonly config = { path: '/balance/' , method: 'GET' }

  public static getBalance (enviroment: any, cb: any): any {
    const finalConfig = Object.assign(new HttpsConfig(this.config), enviroment)
    const data = ''
    const executeHttp = new HttpsClient(finalConfig, data, cb)
    return executeHttp.httpRequest()
  }
}

export class QueryTransactionFilter {
  private static readonly config = { path: '' , method: 'GET' }

  public static getTransaction (data: QueryTransactionFilterData, enviroment: any, cb: any): any {
    this.config.path = `transactions?initialDate=${data.initialDate}&finalDate=${data.finalDate}/`
    const finalConfig = Object.assign(new HttpsConfig(this.config), enviroment)
    const executeHttp = new HttpsClient(finalConfig, data, cb)
    return executeHttp.httpRequest()
  }
}

export class QueryWebhookRequest {
  private static readonly config = { path: '' , method: 'GET' }

  public static getWebhook (data: QueryTransactionData, enviroment: any, cb: any): any {
    this.config.path = `transactions/${data.uuid}/webhook/`
    const finalConfig = Object.assign(new HttpsConfig(this.config), enviroment)
    const executeHttp = new HttpsClient(finalConfig, data, cb)
    return executeHttp.httpRequest()
  }
}
