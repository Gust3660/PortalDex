import { useState } from 'react'

const STORAGE_KEY = 'portal-dex-favorites'

function getStoredFavorites() {
  try {
    const storedFavorites = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(storedFavorites) ? storedFavorites : []
  } catch {
    return []
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(getStoredFavorites)

  const toggleFavorite = (characterId) => {
    setFavorites((currentFavorites) => {
      const nextFavorites = currentFavorites.includes(characterId)
        ? currentFavorites.filter((id) => id !== characterId)
        : [...currentFavorites, characterId]

      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextFavorites))
      return nextFavorites
    })
  }

  return { favorites, toggleFavorite }
}
