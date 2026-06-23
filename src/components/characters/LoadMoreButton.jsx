import { ListPlus, LoaderCircle } from 'lucide-react'

export function LoadMoreButton({ isLoading, onLoadMore }) {
  return (
    <div className="mt-10 flex justify-center">
      <button
        type="button"
        onClick={onLoadMore}
        disabled={isLoading}
        className="inline-flex min-w-44 items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-lime-400 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-lime-400/25 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-black disabled:hover:text-white"
      >
        {isLoading ? (
          <LoaderCircle className="animate-spin" size={20} />
        ) : (
          <ListPlus size={20} />
        )}
        {isLoading ? 'Cargando...' : 'Cargar más'}
      </button>
    </div>
  )
}
