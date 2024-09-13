import AuthorCard from '@/components/Cards/AuthorCard'
import BooksCard from '@/components/Cards/BooksCard'
import StoreCard from '@/components/Cards/StoresCard'
import HorizontalView from '@/components/layout/HorizontalView'
import { getBooks } from '@/services/data/books/getBooks'
import { Author } from '@/services/data/entities/Author'
import { Store } from '@/services/data/entities/Store'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const getAuthors = async () => {
  const response = await axios.get<Author[]>('/authors')
  return response.data
}

const getStores = async () => {
  const response = await axios.get<Store[]>('/stores')
  return response.data
}

const HorizontalViewHeaderComponent = ({
  title,
  navigateTo,
}: {
  title: string
  navigateTo: string
}) => {
  return (
    <div className="flex justify-between">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <Link
        className="bg-[#D86128] px-2 py-1.5 text-white rounded-sm"
        to={navigateTo}
      >
        View All
      </Link>
    </div>
  )
}

const HomePage = () => {
  const { isLoading: isBooksDataLoading, data: booksData } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  })

  const { isLoading: isAuthorDataLoading, data: AuthorsData } = useQuery({
    queryKey: ['authors'],
    queryFn: getAuthors,
  })

  const { isLoading: isStoresDataLoading, data: storeData } = useQuery({
    queryKey: ['stores'],
    queryFn: getStores,
  })

  if (isBooksDataLoading || isAuthorDataLoading || isStoresDataLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HorizontalView
        data={booksData}
        renderItem={(book) => <BooksCard key={book.id} bookData={book} />}
        headerComponent={
          <HorizontalViewHeaderComponent
            title="Shop By Books"
            navigateTo="/shop/books"
          />
        }
      />

      <HorizontalView
        data={AuthorsData}
        renderItem={(author) => (
          <AuthorCard key={author.id} authorData={author} />
        )}
        headerComponent={
          <HorizontalViewHeaderComponent
            title="Shop By Authors"
            navigateTo="/shop/authors"
          />
        }
      />

      <HorizontalView
        headerComponent={
          <HorizontalViewHeaderComponent
            title="Shop by Stores"
            navigateTo="/shop/stores"
          />
        }
        data={storeData}
        renderItem={(store) => <StoreCard key={store.id} storeData={store} />}
      />
    </>
  )
}

export default HomePage
