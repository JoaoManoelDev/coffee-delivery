import { Minus, Plus } from "lucide-react"

import { Button } from "@src/components/ui/button"

export function CoffeeInput() {
  return (
    <div className="flex items-center gap-x-1 bg-zinc-200 rounded-md p-1">
      <Button size="icon" className="w-5 h-5 rounded-full bg-zinc-200 hover:bg-zinc-200">
        <Minus className="w-3 h-3 text-primary" />
      </Button>

      <input
        type="number"
        className="max-w-[20px] text-center outline-none bg-zinc-200"
        defaultValue={1}
      />

      <Button size="icon" className="w-5 h-5 rounded-full bg-zinc-200 hover:bg-zinc-200">
        <Plus className="w-3 h-3 text-primary" />
      </Button>
    </div>
  )
}