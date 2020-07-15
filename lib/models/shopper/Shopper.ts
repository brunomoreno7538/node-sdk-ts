import { ShopperAddData } from './protocols/ShopperModel'
import { ShopperData } from '../../core/protocols/index'
import { DocumentType } from './enum/DocumentType'
import { PhoneType } from './enum/PhoneType'

/**
 * Shopper class
 */
export class Shopper {
  private readonly email: string
  private readonly name: string
  private readonly documentType: DocumentType
  private readonly document: string
  private readonly phoneType: PhoneType
  private readonly phone: string
  private readonly branch: string
  private readonly account: string

  /**
   *
   * @param {ShopperAddData} shopperData
   * @var {string} this.email
   * @var {string} this.name
   * @var {DocumentType} this.documentType
   * @var {string} this.document
   * @var {PhoneType} this.phoneType
   * @var {string} this.phone
   * @var {string} this.branch
   * @var {string} this.account
   */
  public constructor (shopperData: ShopperAddData) {
    this.email = shopperData.email
    this.name = shopperData.name
    this.documentType = shopperData.documentType
    this.document = shopperData.document
    this.phoneType = shopperData.phoneType
    this.phone = shopperData.phone
    this.branch = shopperData.branch
    this.account = shopperData.account
  }

  /**
 * @param {void}
 * @returns {ShopperData}
 */
  public setShopper (): ShopperData {
    return {
      id: '1',
      email: this.email,
      name: this.name,
      document: {
        type: this.documentType,
        number: this.document
      },
      phone: {
        type: this.phoneType,
        number: this.phone
      },
      bankDetails: {
        branch: this.branch,
        account: this.account
      }
    }
  }
}
