import { Orbit } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-16 text-center sm:px-8 sm:pt-24">
      <div className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />
      <Orbit className="absolute left-[8%] top-16 hidden text-cyan-400/20 lg:block" size={100} />

      <div className="relative mx-auto max-w-3xl">
        <h1 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
          Explora el <span className="text-lime-400">multiverso</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Busca personajes, descubre sus dimensiones y guarda a tus favoritos.
        </p>
      </div>
    </section>
  )
}
