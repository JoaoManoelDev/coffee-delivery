import { Baloo_2 } from 'next/font/google'

import { CoffeeCard } from './coffee-card'
import { cn } from '@src/lib/utils'

import { coffees } from '@src/data/coffees'

const baloo = Baloo_2({ subsets: ['latin'] })

export function OurCoffees() {
  return (
    <section className="container max-w-6xl space-y-20">
      <h2 className={cn('text-3xl font-bold', baloo.className)}>Nossos Cafés</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-4 gap-y-6'>
        {coffees.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  )
}