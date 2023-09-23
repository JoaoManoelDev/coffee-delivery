import Image from "next/image"

import introImg from '@src/assets/intro-img.png'

import { Infos } from "./infos"

export function Hero() {
  return (
    <section className="py-10 md:py-20 container max-w-6xl flex justify-between items-center">
      <Infos />
      <Image alt="" src={introImg} className="hidden xl:block" />
    </section>
  )
}