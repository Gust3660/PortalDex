import { useEffect, useState } from 'react'
import { getCharacters } from '../services/charactersApi'

const initialData = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
}

export function useCharacters(filters) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const currentPage = Number(filters.page)

    async function loadCharacters() {
      try {
        setIsLoading(true)
        setError('')
        if (currentPage === 1) setData(initialData)

        const response = await getCharacters(filters, controller.signal)
        setData((currentData) => ({
          info: response.info,
          results:
            currentPage === 1
              ? response.results
              : [...currentData.results, ...response.results],
        }))
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
          if (currentPage === 1) setData(initialData)
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    loadCharacters()
    return () => controller.abort()
  }, [filters])

  return { ...data, isLoading, error }
}
