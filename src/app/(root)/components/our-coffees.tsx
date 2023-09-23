import { Baloo_2 } from 'next/font/google'

import { CoffeeCard } from './coffee-card'
import { cn } from '@src/lib/utils'

import { useCoffeeStore } from '@src/store/coffee-store'

const baloo = Baloo_2({ subsets: ['latin'] })

export function OurCoffees() {
  const { coffees } = useCoffeeStore.getState()

  return (
    <section className="container max-w-6xl space-y-20">
      <h2 className={cn('text-3xl font-bold text-center lg:text-left', baloo.className)}>Nossos Cafés</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-4 gap-y-6'>
        {coffees.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  )
}