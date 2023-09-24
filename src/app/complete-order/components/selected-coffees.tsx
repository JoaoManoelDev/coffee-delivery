'use client'

import { Baloo_2 } from 'next/font/google'
import Image from "next/image"
import { Trash2 } from "lucide-react"

import { Button } from "@src/components/ui/button"
import { Card } from "@src/components/ui/card"
import { Separator } from "@src/components/ui/separator"
import { useCoffeeStore } from "@src/store/coffee-store"
import { CoffeeInput } from "./coffee-input"
import { priceFormatter } from "@src/utils/formatter"
import { cn } from '@src/lib/utils'

const DELIVERY_PRICE = 350 // 3,50
const baloo = Baloo_2({ subsets: ['latin'] })

export function SelectedCoffees() {
  const { cartCoffee, incriseCoffeeQuantity, removeCoffeeToCart } = useCoffeeStore()

  const totalCoffee = cartCoffee.reduce((total, produto) => {
    return total + produto.price * produto.quantity
  }, 0)

  const totalPrice = totalCoffee + DELIVERY_PRICE

  function handleIncrease(coffeeId: string) {
    incriseCoffeeQuantity(coffeeId, 'increase')
  }
  
  function handleDecrease(coffeeId: string) {
    incriseCoffeeQuantity(coffeeId, 'decrease')
  }

  return (
    <div className="flex flex-col w-full space-y-3 mb-4">
      <h2 className={cn("font-bold text-lg", baloo.className)}>
        Cafés selecionados
      </h2>

      <Card className="bg-secondary p-4 lg:p-8 rounded-tr-3xl rounded-bl-3xl space-y-5">
        {cartCoffee.map(coffee => (
          <div key={coffee.id}>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className='w-14'>
                  <Image
                    src={`/coffees/${coffee.photo}`}
                    alt=""
                    width={80}
                    height={80}
                    quality={100}
                    priority={true}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className='w-32 leading-4'>{coffee.name}</span>

                  <div className="flex gap-1">
                    <CoffeeInput
                      quantity={coffee.quantity}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                      coffeeId={coffee.id}
                    />

                    <Button
                      variant="destructive"
                      className="gap-1 h-7 px-2"
                      onClick={() => removeCoffeeToCart(coffee.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className='hidden sm:block'>Remove</span>
                    </Button>
                  </div>
                </div>
              </div>

              <p className='font-bold leading-4'>{priceFormatter.format(coffee.price * coffee.quantity / 100)}</p>
            </div>

            <Separator className="mt-5" />
          </div>
        ))}

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Total items</span>
            <span>{priceFormatter.format(totalCoffee / 100)}</span>
          </div>

          <div className="flex justify-between">
            <span>Entrega</span>
            <span>{priceFormatter.format(DELIVERY_PRICE / 100)}</span>
          </div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>{priceFormatter.format(totalPrice / 100)}</span>
          </div>
        </div>

        <Button
          className="w-full bg-yellow-500 text-primary-foreground hover:bg-yellow-500/90 font-bold"
          disabled={cartCoffee.length <= 0}
        >
          CONFIRMAR PEDIDO
        </Button>
      </Card>
    </div>
  )
} 