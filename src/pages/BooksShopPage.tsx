import BooksCard from '@/components/Cards/BooksCard'
import SearchQuerySelect from '@/components/SearchQuerySelect'
import SvgSearchNormal from '@/components/ui/icons/SearchNormal'
import { useDebounce } from '@/hooks/useDebounce'
import { getBooks } from '@/services/data/books/getBooks'
import { Author } from '@/services/data/entities/Author'
import { Store } from '@/services/data/entities/Store'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const BooksShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

  const searchParamsObject = Object.fromEntries(searchParams.entries()) as {
    author?: string
    store?: string
    bookName?: string
  }

  useEffect(() => {
    setSearchParams({
      ...searchParamsObject,
      bookName: debouncedValue,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, setSearchParams])

  const { data, isLoading } = useQuery({
    queryKey: ['books', searchParamsObject],
    queryFn: () =>
      getBooks({
        authorId: searchParamsObject.author
          ? +searchParamsObject.author
          : undefined,
        storeId: searchParamsObject.store
          ? +searchParamsObject.store
          : undefined,
      }),
  })

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <section>
      <div className="flex justify-between my-6">
        <h3 className="text-2xl font-semibold">Browse Books</h3>
        <div className="relative h-10 ">
          <SvgSearchNormal
            className="absolute left-0 top-2 mx-1"
            width={24}
            height={24}
          />
          <input
            placeholder="Search"
            className="px-10 h-full"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between my-6">
        <div className="flex gap-2 ps-2">
          <span>Author</span>
          <SearchQuerySelect<Author>
            getterUrl={'/authors'}
            onSearch={(searchQuery) => {
              setSearchParams({ ...searchParamsObject, author: searchQuery })
            }}
            valueExtractor={(value) => value.id.toString()}
            valueKeyExtractor={(value) => value.id.toString()}
            valueLabelExtractor={(value) =>
              `${value.first_name} ${value.last_name}`
            }
            defaultValue={''}
            currentValue={searchParamsObject.author}
          />

          <div className="flex gap-2 ps-2">
            <span>Store</span>
            <SearchQuerySelect<Store>
              getterUrl={'/stores'}
              onSearch={(searchQuery) => {
                setSearchParams({ ...searchParamsObject, store: searchQuery })
              }}
              currentValue={searchParamsObject.store}
              valueExtractor={(value) => value.id.toString()}
              valueKeyExtractor={(value) => value.id.toString()}
              valueLabelExtractor={(value) => value.name}
              defaultValue={'All'}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-card-layout gap-2">
        {data?.map((book) => (
          <BooksCard containerClassName={'w-full'} bookData={book} />
        ))}
      </div>
    </section>
  )
}

export default BooksShopPage
