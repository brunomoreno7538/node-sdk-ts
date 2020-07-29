import paymee from '../lib/index'

const env = paymee.Enviroment.setEnviroment('SANDBOX', '4397d1ca-f638-3614-9170-5d8fb88367f1', 'be1f0b79-f282-31a8-9331-13a075381a3f')

const data: any = {
  uuid: '7eae79bc-8703-370c-83bd-20cefea1f2ca',
  amount: 11.00,
  reason: 'exemplo'
}

paymee.RequestRefund.executeRefund(data, env, (response: any, error: any) => {
  console.log(response)
})
