'use client'

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, ShoppingCart } from "lucide-react"

import logo from "../assets/coffee-delivery-logo.svg"

import { Shell } from "@src/components/shell"
import { Button, buttonVariants } from "@src/components/ui/button"
import { cn } from "@src/lib/utils"

import { useCoffeeStore } from "@src/store/coffee-store"

export function Header() {
  const { cartCoffee, loadCartCoffees } = useCoffeeStore()

  useEffect(() => {
    loadCartCoffees()
  }, [loadCartCoffees])

  return (
    <header className="fixed top-0 left-0 right-0 m-auto bg-background/50 backdrop-blur-lg z-50">
      <Shell className="md:py-6 flex justify-between items-center max-w-6xl">
        <Link href="/">
          <Image
            alt="logo"
            src={logo}
            width={85}
            height={40}
            priority={true}
            className="bg-no-repeat bg-cover"
          />
        </Link>

        <div className="flex space-x-3">
          <div
            className={cn(buttonVariants({ variant: 'outline' }), 'space-x-1 text-primary bg-primary/20 hover:text-primary hover:bg-primary/20 border-none px-2')}
          >
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-base">Rio de Janeiro, RJ</span>
          </div>

          <Link href="/complete-order" className="relative">
            <Button variant="outline" size="icon" className="bg-yellow-500/20 hover:bg-yellow-500/30 border-none px-2">
              <span
                className="absolute w-5 h-5 bg-yellow-500 rounded-full -top-2 -right-2 text-secondary text-xs flex justify-center items-center z-10"
              >
                {cartCoffee.length}
              </span>
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-yellow-700" />
            </Button>
          </Link>
        </div>

      </Shell>
    </header>
  )
}
