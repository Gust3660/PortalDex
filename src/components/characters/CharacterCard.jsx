import { Eye, Heart, MapPin } from 'lucide-react'
import { getStatusStyle } from '../../utils/characterFormatters'

export function CharacterCard({
  character,
  isFavorite,
  onFavorite,
  onSelect,
}) {
  const status = getStatusStyle(character.status)

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-2xl hover:shadow-lime-950/30">
      <div className="relative aspect-square overflow-hidden bg-slate-800">
        <img
          src={character.image}
          alt={character.name}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold backdrop-blur ${status.badge}`}
        >
          <span className={`size-2 rounded-full ${status.dot}`} />
          {status.label}
        </span>
        <button
          type="button"
          onClick={() => onFavorite(character)}
          aria-label={
            isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'
          }
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-slate-950/70 text-white backdrop-blur transition hover:scale-110 hover:bg-slate-950"
        >
          <Heart
            size={19}
            className={isFavorite ? 'fill-pink-400 text-pink-400' : ''}
          />
        </button>
      </div>

      <div className="p-5">
        <p className="text-sm font-black text-lime-400">#{character.id}</p>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-400">
          {character.species}
        </p>
        <h2 className="mt-1 truncate text-xl font-black text-white">
          {character.name}
        </h2>
        <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
          <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-400" />
          <span className="line-clamp-2">{character.location.name}</span>
        </div>
        <button
          type="button"
          onClick={() => onSelect(character)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-bold text-white transition hover:border-lime-400/30 hover:bg-lime-400 hover:text-slate-950"
        >
          <Eye size={17} />
          Ver expediente
        </button>
      </div>
    </article>
  )
}
