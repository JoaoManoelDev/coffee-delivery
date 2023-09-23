'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

import { Form } from '@src/components/ui/form'
import { AddressForm } from './address-form'
import { PaymentMethod } from './payment-method'

import {
  confirmOrderFormValidationSchema,
  orderData
} from '@src/lib/validations/confirm-order-form-validation'
import { SelectedCoffees } from './selected-coffees'
import { useCoffeeStore } from '@src/store/coffee-store'

export function CompleteOrder() {
  const router = useRouter()
  const { submitOrderCoffeeInfo, clearCartCoffee } = useCoffeeStore()

  const confirmOrderForm = useForm<orderData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      cep: "",
      city: "",
      complement: "",
      district: "",
      number: "",
      street: "",
      uf: "",
      paymentMethod: 'money'
    }
  })

  function onSubmit(data: orderData) {
    submitOrderCoffeeInfo(data)
    router.push('/order-confirmed')
    clearCartCoffee()
  }

  return (
    <Form {...confirmOrderForm} >
      <form
        onSubmit={confirmOrderForm.handleSubmit(onSubmit)}
        className='flex flex-col lg:flex-row justify-between gap-8'
      >
        <div className='space-y-3'>
          <AddressForm />
          <PaymentMethod />
        </div>

        <SelectedCoffees />
      </form>
    </Form>
  )
}