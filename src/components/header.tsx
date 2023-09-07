import Link from "next/link"
import Image from "next/image"
import { MapPin, ShoppingCart } from "lucide-react"

import logo from "../assets/coffee-delivery-logo.svg"

import { Shell } from "@src/components/shell"
import { Button, buttonVariants } from "@src/components/ui/button"
import { cn } from "@src/lib/utils"

export function Header() {
  return (
    <header className="border-b">
      <Shell className="md:py-6 flex justify-between items-center max-w-6xl">

        <Link href="/">
          <Image
            alt="logo"
            src={logo}
            width={85}
            height={40}
            priority={true}
          />
        </Link>

        <div className="space-x-3">
          <div
            className={cn(buttonVariants({ variant: 'outline' }), 'space-x-1 text-violet-700 bg-violet-600/20 hover:text-violet-700 hover:bg-violet-600/20 border-none')}
          >
            <MapPin className="w-5 h-5" />
            <span className="">Rio de Janeiro, RJ</span>
          </div>

          <Link href="/complete-order" className="relative">
            <Button variant="outline" size="icon" className="bg-yellow-600/20 hover:bg-yellow-600/30 border-none">
              <span
                className="absolute w-5 h-5 bg-yellow-600 rounded-full -top-6 -right-3 text-white text-xs flex justify-center items-center z-10"
              >
                1
              </span>
              <ShoppingCart className="w-5 h-5 text-yellow-700" />
            </Button>
          </Link>
        </div>

      </Shell>
    </header>
  )
}