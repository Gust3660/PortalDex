const API_URL = 'https://rickandmortyapi.com/api/character'

export async function getCharacters(filters, signal) {
  const params = new URLSearchParams()

  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.set(key, value)
  })

  const response = await fetch(`${API_URL}?${params.toString()}`, { signal })

  if (response.status === 404) {
    return {
      info: { count: 0, pages: 0, next: null, prev: null },
      results: [],
    }
  }

  if (!response.ok) {
    throw new Error('No fue posible consultar los personajes.')
  }

  return response.json()
}
