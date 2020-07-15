import { DocumentType } from '../enum/DocumentType'
import { PhoneType } from '../enum/PhoneType'
export interface ShopperAddData{
  email: string
  name: string
  documentType: DocumentType
  document: string
  phoneType: PhoneType
  phone: string
  branch: string
  account: string
}
