'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image"
import { Clock, DollarSign, MapPin } from "lucide-react"

import ConfirmedOrderImg from "@src/assets/confirmed-order.svg"
import { useCoffeeStore } from "@src/store/coffee-store"

export default function OrderConfirmed() {
  const { orderCoffeeInfo } = useCoffeeStore()
  const router = useRouter()

  const paymentMethodMapping = {
    money: 'Dinheiro',
    credit: 'Crédito',
    debit: 'Débito',
  }

  useEffect(() => {
    if (!orderCoffeeInfo.cep) router.push('/')
  }, [router, orderCoffeeInfo])

  return (
    <section className="mt-36 container max-w-6xl flex flex-col gap-10">
      <div className="space-y-4 lg:space-y-1">
        <h1 className="text-yellow-600 text-4xl font-bold text-center lg:text-left">Uhu! Pedido confirmado</h1>
        <p className="text-2xl text-center lg:text-left">Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <div className="flex justify-between">
        <div
          className="rounded-bl-[37px] rounded-br-[7px] rounded-tr-[37px] rounded-tl-[7px] max-w-lg p-[2px] w-full bg-gradient-to-r from-primary to-yellow-500"
        >
          <div className="h-full w-full p-9 bg-background rounded-bl-[37px] rounded-br-[7px] rounded-tr-[37px] rounded-tl-[7px] space-y-8 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-background" />
              </div>
              <div className="flex flex-col leading-5">
                <span>Entrega em {orderCoffeeInfo.street}</span>
                <span className="font-bold">{orderCoffeeInfo.district} {orderCoffeeInfo.city} {orderCoffeeInfo.uf}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 ">
              <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-background" />
              </div>
              <div className="flex flex-col leading-5">
                <span>Previsão de entrega</span>
                <span className="font-bold">20 min - 30 min</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-yellow-600 w-8 h-8 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-background" />
              </div>
              <div className="flex flex-col leading-5">
                <span>Pagamento na entrega</span>
                <span className="font-bold">
                  {paymentMethodMapping[orderCoffeeInfo.paymentMethod]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Image src={ConfirmedOrderImg} alt="" className="hidden lg:block" />
      </div>

      <p className="text-center lg:text-left">Obrigado por confiar em nossa loja!</p>
    </section>
  )
}