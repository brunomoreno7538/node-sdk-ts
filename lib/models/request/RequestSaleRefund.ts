import { HttpsClient, HttpsConfig } from '../../core/Client'
import { RefundData } from '../../core/protocols/Refund'

export class RequestRefund {
  private static readonly config = { path: '' , method: 'PUT' }

  public static executeRefund (data: RefundData, enviroment: any, cb: any): any {
    this.config.path = `transactions/${data.uuid}/refund`
    delete data.uuid
    const finalConfig = Object.assign(new HttpsConfig(this.config), enviroment)
    const executeHttp = new HttpsClient(finalConfig, data, cb)
    return executeHttp.httpRequest()
  }
}
