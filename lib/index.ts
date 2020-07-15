import { Enviroment } from './core/Client'
import { Shopper } from './models/shopper/Shopper'
import { CheckOut } from './models/checkout/Checkout'
import { CheckOutType } from './models/checkout/enum/CheckoutType'
import { Currency } from './models/checkout/enum/Currency'
import { PaymentMethod } from './models/checkout/enum/PaymentMethod'
import { DocumentType } from './models/shopper/enum/DocumentType'
import { PhoneType } from './models/shopper/enum/PhoneType'

const paymee = { Enviroment, Shopper, CheckOut, CheckOutType, Currency, PaymentMethod, DocumentType, PhoneType }
export default paymee
