'use client'

import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Badge } from "@src/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@src/components/ui/card"
import { Button } from "@src/components/ui/button"
import { QuantityCoffeeCoffeeInput } from "./quantity-coffee-input"
import { useState } from "react"
import { useCoffeeStore } from "@src/store/coffee-store"
import { priceFormatter } from "@src/utils/formatter"

export interface Coffee {
  id: string
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCoffeeStore()

  const handleIncrease = () => setQuantity(state => state + 1)
  const handleDecrease = () => setQuantity(state => state - 1)

  const handleAddToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }

    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <Card className="mb-11 flex flex-col items-center gap-y-4">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src={`/coffees/${coffee.photo}`}
          alt=""
          width={100}
          height={100}
          quality={100}
          priority={true}
          className="-mt-10"
        />

        <div className="max-w-[15rem] flex items-center flex-wrap justify-center gap-y-2 gap-x-1">
          {coffee.tags.map(tag => (
            <Badge
              key={`${coffee.id}-${tag}`}
              className="text-[11px] text-yellow-600/75 font-bold border-none bg-yellow-500/20 uppercase"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <CardHeader className="flex flex-col items-center mt-0 bg-secondary h-full">
        <CardTitle className="text-base">{coffee.name}</CardTitle>
        <CardDescription className="text-center leading-[16px] text-muted-foreground">{coffee.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between w-full mt-auto gap-1">  
        <span className="font-bold text-lg">{priceFormatter.format(coffee.price / 100)}</span>
        
        <div className="flex items-center gap-x-2">
          <QuantityCoffeeCoffeeInput
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            quantity={quantity}
          />

          <Button
            className="bg-primary hover:bg-primary/80 w-8 h-8"
            size="icon"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}