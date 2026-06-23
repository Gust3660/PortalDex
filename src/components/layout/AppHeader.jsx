import { Heart, Orbit } from 'lucide-react'

export function AppHeader({ favoritesCount }) {
  return (
    <header className="border-b border-white/8 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/20">
            <Orbit size={25} strokeWidth={2.4} />
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-white">
              Portal<span className="text-lime-400">Dex</span>
            </p>
            <p className="text-xs text-slate-500">Explorador multiversal</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
          <Heart size={16} className="fill-pink-400 text-pink-400" />
          <span className="hidden sm:inline">Favoritos</span>
          <strong className="text-white">{favoritesCount}</strong>
        </div>
      </div>
    </header>
  )
}
