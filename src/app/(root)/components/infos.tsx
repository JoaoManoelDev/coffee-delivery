import { Baloo_2 } from "next/font/google"
import { Box, Coffee, ShoppingCart, Timer } from 'lucide-react'

import { Benefits } from './benefits'
import { cn } from "@src/lib/utils"

const baloo = Baloo_2({ subsets: ['latin'] })

export function Infos() {
  return (
    <div className="flex flex-col">
      <div className="space-y-5">
        <h1
          className={
            cn(
              'text-center xl:text-left text-3xl md:text-5xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-violet-500 to-violet-600',
              baloo.className
            )
          }>
          Encontre o café perfeito para qualquer hora do dia
        </h1>

        <p className="text-center xl:text-left mx-auto xl:mx-0 text-base md:text-lg leading-relaxed max-w-lg ">
          Com o Coffee Delivery você recebe seu café onde estiver, a
          qualquer hora
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-14 gap-y-2 md:gap-y-4 mx-auto xl:mx-0'>
        <Benefits title='Compra simples e segura' icon={ShoppingCart} className='bg-yellow-700' />
        <Benefits title='Embalagem mantém o café intacto' icon={Box} className='bg-zinc-700' />
        <Benefits title='Entrega rápida e rastreada' icon={Timer} className='bg-yellow-500' />
        <Benefits title='O café chega fresquinho até você' icon={Coffee} className='bg-violet-700' />
      </div>
    </div>
  )
}