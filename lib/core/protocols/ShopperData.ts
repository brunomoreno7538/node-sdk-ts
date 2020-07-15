import { Document, Phone, BankDetails } from '../../models/shopper/protocols/index'
export interface ShopperData{
  id: string
  email: string
  name: string
  document: Document
  phone: Phone
  bankDetails: BankDetails
}
