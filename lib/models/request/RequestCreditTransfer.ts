import { HttpsClient, HttpsConfig } from '../../core/Client'
import { CreditTransfer } from '../../core/protocols/CreditTransfer'

export class RequestCreditTransfer {
  private static readonly config = { path: 'transactions/creditTransfer' , method: 'POST' }

  public static executeTransfer (data: CreditTransfer, enviroment: any, cb: any): any {
    const finalConfig = Object.assign(new HttpsConfig(this.config), enviroment)
    const executeHttp = new HttpsClient(finalConfig, data, cb)
    return executeHttp.httpRequest()
  }
}
