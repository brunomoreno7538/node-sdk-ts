import paymee from '../lib/index'

const env = paymee.Enviroment.setEnviroment('SANDBOX', '4397d1ca-f638-3614-9170-5d8fb88367f1', 'be1f0b79-f282-31a8-9331-13a075381a3f')

const shopper = new paymee.Shopper({
  email: 'teste@a.com',
  name: 'bruno',
  documentType: paymee.DocumentType.CNPJ,
  document: '123456790',
  phoneType: paymee.PhoneType.HOME,
  phone: '1234567890',
  branch: '123456',
  account: '012345678912345'
})

const data = {
  type: paymee.CheckOutType.SemiTransparent,
  currency: paymee.Currency.USD,
  amount: 1,
  referenceCode: 'abcd',
  maxAge: 120,
  paymentMethod: paymee.PaymentMethod.SANTANDER_TRANSFER,
  callbackURL: '',
  shopper: shopper.setShopper()
}

paymee.CheckOut.create(data, env, (response: any, error: any) => {
  console.log(response)
})
