import paymee from '../lib/index'

const env = paymee.Enviroment.setEnviroment('SANDBOX', '4397d1ca-f638-3614-9170-5d8fb88367f1', 'be1f0b79-f282-31a8-9331-13a075381a3f')

paymee.QueryTransactionFilter.getTransaction({ initialDate: '2018-01-01', finalDate: '2021-01-01' }, env, (response: any, error: any) => {
  console.log(response)
})
