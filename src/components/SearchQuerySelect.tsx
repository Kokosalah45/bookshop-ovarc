import { useEffect, useState } from 'react'

type SearchQuerySelectProps<T> = {
  getterUrl: string
  onSearch: (searchQuery: string) => void
  valueLabelExtractor: (value: T) => string
  valueKeyExtractor: (value: T) => string
  valueExtractor: (value: T) => string
  currentValue: string | undefined
  defaultValue: string
}
const SearchQuerySelect = <T,>({
  getterUrl,
  onSearch,
  valueKeyExtractor,
  valueLabelExtractor,
  valueExtractor,
  currentValue,
  defaultValue,
}: SearchQuerySelectProps<T>) => {
  const [values, setValues] = useState([])

  useEffect(() => {
    fetch(getterUrl)
      .then((res) => res.json())
      .then((data) => {
        setValues(data)
      })
  }, [getterUrl])

  return (
    <div>
      <select
        onChange={(e) => {
          onSearch(e.target.value)
        }}
      >
        <option value={defaultValue}>
          {values && values.length ? 'All' : 'Loading'}
        </option>
        {values &&
          values.map((value: T) => (
            <option
              key={valueKeyExtractor(value)}
              value={valueExtractor(value)}
              selected={valueExtractor(value) === currentValue}
            >
              {valueLabelExtractor(value)}
            </option>
          ))}
      </select>
    </div>
  )
}

export default SearchQuerySelect
