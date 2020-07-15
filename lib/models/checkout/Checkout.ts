import { HttpsClient, HttpsConfig } from '../../core/Client'
import { Data, Callback } from '../../core/protocols/index'
import { InvalidParamError } from '../errors/invalid-param'
/**
 * CheckOut class
 */
export class CheckOut {
  private static config = { path: '', method: 'POST' }

  /**
   * validateEmail method
   * @param {string} email
   * @returns {boolean}
   */
  private static validateEmail (email: string): boolean {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  /**
   * create method - create a http request
   * @param {Data} data
   * @param {any} enviroment
   * @param {Callback} cb
   * @returns {any}
   */
  public static create (data: Data, enviroment: any, cb: Callback): any {
    if (!data.shopper.bankDetails.branch || data.shopper.bankDetails.account.length < 1 || data.shopper.bankDetails.account.length > 15) {
      throw new InvalidParamError('Length must be between 1 and 6', 'Shopper Branch')
    }
    if (!data.shopper.bankDetails.branch || data.shopper.bankDetails.branch.length < 1 || data.shopper.bankDetails.branch.length > 6) {
      throw new InvalidParamError('Length must be between 1 and 6', 'Shopper Branch')
    }
    if (!data.shopper.document.number || data.shopper.document.number.length < 2 || data.shopper.document.number.length > 25) {
      throw new InvalidParamError('Length must be between 2 and 25', 'Shopper Document')
    }
    if (!data.shopper.phone.number || data.shopper.phone.number.length <= 9 || data.shopper.phone.number.length >= 25) {
      throw new InvalidParamError('Length must be between 10 and 25', 'Shopper Phone')
    }
    if (!this.validateEmail(data.shopper.email)) throw new InvalidParamError('Email must be valid', 'Shopper Email')
    if (!data.amount || data.amount < 0.01) throw new InvalidParamError('Must be greater than or equal to 0.01', 'Amount')
    if (!data.referenceCode || data.referenceCode.length < 1 || data.referenceCode.length > 50) {
      throw new InvalidParamError('Length must be between 1 and 50', 'ReferenceCode')
    }
    (data.type === 0) ? this.config.path = 'checkout' : this.config.path = 'checkout/transparent'
    const finalConfig = Object.assign(new HttpsConfig(this.config), enviroment)
    const executeHttp = new HttpsClient(finalConfig, data, cb)
    return executeHttp.httpRequest()
  }
}
