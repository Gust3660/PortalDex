import { SearchX } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-20 text-center">
      <SearchX className="mx-auto text-slate-600" size={52} />
      <h2 className="mt-5 text-xl font-black text-white">
        No encontramos habitantes
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Prueba con otro nombre o cambia los filtros de búsqueda.
      </p>
    </div>
  )
}
