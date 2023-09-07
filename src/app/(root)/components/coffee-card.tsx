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
import { CoffeeInput } from "./coffee-input"

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
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
              className="text-[10px] text-yellow-600 border-none bg-yellow-600/20 uppercase"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardHeader className="flex flex-col items-center mt-0 bg-zinc-100 h-full">
        <CardTitle className="text-base">{coffee.name}</CardTitle>
        <CardDescription className="text-center leading-[16px]">{coffee.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between w-full mt-auto">
        <div className="flex items-center gap-x-1">
          <span className="text-[10px] font-bold">R$</span>
          <span className="font-bold text-lg">9,90</span>
        </div>
        
        <div className="flex items-center gap-x-2">
          <CoffeeInput />
          <Button className="bg-violet-500 hover:bg-violet-600 w-8 h-8" size="icon">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>

  )
}