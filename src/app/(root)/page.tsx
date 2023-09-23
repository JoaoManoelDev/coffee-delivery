import { Hero } from "./components/hero"
import { OurCoffees } from "./components/our-coffees"

export default function Home() {
  return (
    <div className="mt-[5.5rem] space-y-5">
      <div className="bg-[url('/intro-background.png')] bg-no-repeat bg-cover bg-center">
        <Hero />
      </div>

      <OurCoffees />  
    </div>
  )
}
