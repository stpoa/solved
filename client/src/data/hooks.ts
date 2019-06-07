import { useEffect, useState } from 'react'

export const useQuery = <T>(_query: string, mockedData?: T) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData(mockedData)
      setLoading(false)
    }, 1000)
  }, [])

  return { data, error: error as Error | null, loading }
}
