import { CharacterCard } from './CharacterCard'
import { EmptyState } from '../feedback/EmptyState'
import { ErrorState } from '../feedback/ErrorState'
import { LoadingGrid } from '../feedback/LoadingGrid'

export function CharacterGrid({
  characters,
  error,
  isLoading,
  favorites,
  onFavorite,
  onSelect,
}) {
  if (isLoading) return <LoadingGrid />
  if (error) return <ErrorState message={error} />
  if (!characters.length) return <EmptyState />

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isFavorite={favorites.includes(character.id)}
          onFavorite={onFavorite}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
