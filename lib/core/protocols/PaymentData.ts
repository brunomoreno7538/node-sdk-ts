import { ShopperData } from './ShopperData'
import { CheckOutType } from '../../models/checkout/enum/CheckoutType'
import { Currency } from '../../models/checkout/enum/Currency'
import { PaymentMethod } from '../../models/checkout/enum/PaymentMethod'

export interface Data{
  type: CheckOutType
  currency: Currency
  amount: number
  referenceCode: string
  maxAge: number
  paymentMethod: PaymentMethod
  callbackURL: string
  shopper: ShopperData
}
