import { RotateCcw, Search } from 'lucide-react'

export function CharacterFilters({ filters, onChange, onReset }) {
  return (
    <section className="mx-auto max-w-3xl">
      <div className="relative">
        <Search
          size={20}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />
        <input
          name="name"
          value={filters.name}
          onChange={onChange}
          placeholder="Buscar personaje por nombre..."
          aria-label="Buscar personaje por nombre"
          autoComplete="off"
          className="h-14 w-full rounded-full border border-white/15 bg-slate-900 pl-12 pr-12 text-sm text-white shadow-xl outline-none transition placeholder:text-slate-600 focus:border-lime-400/60 focus:ring-4 focus:ring-lime-400/10"
        />
        {filters.name && (
          <button
            type="button"
            onClick={onReset}
            aria-label="Limpiar búsqueda"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
          >
            <RotateCcw size={18} />
          </button>
        )}
      </div>
    </section>
  )
}
