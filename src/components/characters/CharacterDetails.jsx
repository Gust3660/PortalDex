import {
  CalendarDays,
  Clapperboard,
  Dna,
  Globe2,
  Grid2X2,
  Heart,
  MapPin,
  UserRound,
} from 'lucide-react'
import {
  getEpisodeNumber,
  getStatusStyle,
} from '../../utils/characterFormatters'

function PropertyCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <Icon className="mx-auto text-cyan-400" size={20} />
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  )
}

export function CharacterDetails({
  character,
  isFavorite,
  onBack,
  onFavorite,
}) {
  const status = getStatusStyle(character.status)
  const firstEpisode = getEpisodeNumber(character.episode[0])

  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-16">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-lime-400/25 active:border-lime-400 active:bg-lime-400 active:text-slate-950"
      >
        <Grid2X2 size={18} />
        Regresar
      </button>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
        <div className="relative bg-gradient-to-br from-cyan-500/15 via-slate-900 to-lime-400/10 px-6 pb-10 pt-12 text-center sm:px-10">
          <div className="mx-auto size-44 overflow-hidden rounded-full border-4 border-lime-400 bg-slate-800 shadow-2xl shadow-lime-950/50 sm:size-52">
            <img
              src={character.image}
              alt={character.name}
              className="size-full object-cover"
            />
          </div>

          <p className="mt-6 text-sm font-black text-lime-400">
            #{character.id}
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">
            {character.name}
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
            {character.species}
            {character.type && ` · ${character.type}`}
          </p>

          <span
            className={`mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold ${status.badge}`}
          >
            <span className={`size-2 rounded-full ${status.dot}`} />
            {status.label}
          </span>
        </div>

        <div className="p-5 sm:p-8">
          <h2 className="text-center text-lg font-black text-white">
            Propiedades
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <PropertyCard
              icon={UserRound}
              label="Género"
              value={character.gender}
            />
            <PropertyCard
              icon={Dna}
              label="Especie"
              value={character.species}
            />
            <PropertyCard
              icon={Globe2}
              label="Origen"
              value={character.origin.name}
            />
            <PropertyCard
              icon={MapPin}
              label="Ubicación"
              value={character.location.name}
            />
            <PropertyCard
              icon={Clapperboard}
              label="Apariciones"
              value={`${character.episode.length} episodios`}
            />
            <PropertyCard
              icon={CalendarDays}
              label="Primera aparición"
              value={`Episodio ${firstEpisode}`}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-black text-white">Episodios</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Episodios en los que aparece el personaje
                </p>
              </div>
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                {character.episode.length}
              </span>
            </div>

            <div className="mt-4 flex max-h-36 flex-wrap gap-2 overflow-y-auto">
              {character.episode.map((episodeUrl) => {
                const episodeNumber = getEpisodeNumber(episodeUrl)

                return (
                  <span
                    key={episodeUrl}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300"
                  >
                    EP {episodeNumber}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => onFavorite(character)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-black text-slate-950 transition hover:bg-lime-300"
            >
              <Heart
                size={18}
                className={isFavorite ? 'fill-slate-950' : ''}
              />
              {isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
