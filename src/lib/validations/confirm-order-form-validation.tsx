import * as zod from 'zod'

export const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string().nullable(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.enum(['credit', 'debit', 'money'])
})

export type orderData = zod.infer<typeof confirmOrderFormValidationSchema>