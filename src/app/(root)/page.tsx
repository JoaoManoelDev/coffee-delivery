import { Hero } from "./components/hero"

export default function Home() {
  return (
    <div className="bg-[url('/intro-background.png')] object-fill bg-no-repeat bg-cover bg-center">
      <Hero />
    </div>
  )
}
