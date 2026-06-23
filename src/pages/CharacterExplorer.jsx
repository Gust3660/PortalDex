import { useMemo, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AppHeader } from '../components/layout/AppHeader'
import { CharacterDetails } from '../components/characters/CharacterDetails'
import { CharacterFilters } from '../components/characters/CharacterFilters'
import { CharacterGrid } from '../components/characters/CharacterGrid'
import { HeroSection } from '../components/characters/HeroSection'
import { LoadMoreButton } from '../components/characters/LoadMoreButton'
import { initialFilters } from '../data/filters'
import { useCharacters } from '../hooks/useCharacters'
import { useDebounce } from '../hooks/useDebounce'
import { useFavorites } from '../hooks/useFavorites'

export function CharacterExplorer() {
  const [filters, setFilters] = useState(initialFilters)
  const [page, setPage] = useState(1)
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const debouncedName = useDebounce(filters.name)
  const { favorites, toggleFavorite } = useFavorites()

  const query = useMemo(
    () => ({
      ...filters,
      name: debouncedName,
      page: String(page),
    }),
    [filters, debouncedName, page],
  )

  const { results, info, isLoading, error } = useCharacters(query)

  const handleFilterChange = (event) => {
    const { name, value } = event.target
    setFilters((current) => ({ ...current, [name]: value }))
    setPage(1)
  }

  const handleReset = () => {
    setFilters(initialFilters)
    setPage(1)
    toast.success('Búsqueda restablecida')
  }

  const handleFavorite = (character) => {
    const wasFavorite = favorites.includes(character.id)
    toggleFavorite(character.id)
    toast.success(
      wasFavorite
        ? `${character.name} salió de favoritos`
        : `${character.name} se guardó en favoritos`,
      { icon: wasFavorite ? '💨' : '💚' },
    )
  }

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setSelectedCharacter(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: '1px solid rgba(255,255,255,.1)',
            background: '#0f172a',
            color: '#f8fafc',
          },
        }}
      />
      <AppHeader favoritesCount={favorites.length} />

      {selectedCharacter ? (
        <CharacterDetails
          character={selectedCharacter}
          isFavorite={favorites.includes(selectedCharacter.id)}
          onBack={handleBack}
          onFavorite={handleFavorite}
        />
      ) : (
        <>
          <HeroSection />

          <main className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
            <CharacterFilters
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleReset}
            />

            <section className="mt-8" aria-live="polite">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
                  Base de datos interdimensional
                </p>
                <h2 className="mt-1 text-2xl font-black text-white">
                  Personajes
                </h2>
              </div>

              <CharacterGrid
                characters={results}
                error={error}
                isLoading={isLoading && results.length === 0}
                favorites={favorites}
                onFavorite={handleFavorite}
                onSelect={handleSelectCharacter}
              />
              {!error && page < info.pages && (
                <LoadMoreButton
                  isLoading={isLoading}
                  onLoadMore={() => setPage((currentPage) => currentPage + 1)}
                />
              )}
            </section>
          </main>
        </>
      )}
    </div>
  )
}
