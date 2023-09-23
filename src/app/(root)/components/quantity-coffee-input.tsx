'use client'

import { Minus, Plus } from "lucide-react"

import { Button } from "@src/components/ui/button"

interface CoffeeInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityCoffeeCoffeeInput({ onDecrease, onIncrease, quantity }: CoffeeInputProps) {
  return (
    <div className="flex items-center gap-x-1 bg-secondary rounded-md p-1">
      <Button
        size="icon"
        className="w-5 h-5 rounded-full bg-secondary hover:bg-secondary"
        type="button"
        onClick={() => onDecrease()}
      >
        <Minus className="w-3 h-3 text-primary" />
      </Button>

      <input
        type="number"
        className="max-w-[20px] text-center outline-none bg-secondary"
        readOnly
        value={quantity}
      />

      <Button
        size="icon"
        className="w-5 h-5 rounded-full bg-secondary hover:bg-secondary"
        type="button"
        onClick={() => onIncrease()}
      >
        <Plus className="w-3 h-3 text-primary" />
      </Button>
    </div>
  )
}