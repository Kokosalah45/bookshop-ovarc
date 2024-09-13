import { Author } from '@/services/data/entities/Author'
import { Book } from '@/services/data/entities/Book'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Card from '../ui/Card'

type BookCardProps = {
  bookData: Book
  containerClassName?: string
}

const bookCoverCustomGradients = [
  'bg-custom-gradient-1',
  'bg-custom-gradient-2',
  'bg-custom-gradient-3',
  'bg-custom-gradient-4',
  'bg-custom-gradient-5',
  'bg-custom-gradient-6',
]

const randomize = (max: number) => Math.floor(Math.random() * max)

const getAuthor = async (authorId: number) => {
  const response = await axios.get<Author>(`/authors/${authorId}`)
  return response.data
}

const BookCardHeader = ({
  authorId,
  bookName,
}: {
  authorId: number
  bookName: string
}) => {
  const { data: authorData } = useQuery({
    queryKey: ['authors', authorId],
    queryFn: () => getAuthor(authorId),
  })

  if (!authorData) {
    return <div>Loading...</div>
  }

  const authorName = `${authorData.first_name} ${authorData.last_name}`

  return (
    <div>
      <p className="font-medium capitalize">{bookName}</p>
      <p className="space-x-1 text-sm">
        <span>by</span>
        <span>{authorName}</span>
      </p>
    </div>
  )
}

const BookCardStart = ({ bookData }: BookCardProps) => {
  const randomIndex = randomize(bookCoverCustomGradients.length)

  const randomGradient = bookCoverCustomGradients[randomIndex]

  return (
    <div
      className={`${randomGradient} rounded-md h-full p-2 flex items-center text-center capitalize`}
    >
      <h3 className="text-sm font-bold ">{bookData.name}</h3>
    </div>
  )
}
const BooksCard = ({ bookData, containerClassName }: BookCardProps) => {
  return (
    <Card
      CardHeaderCompoonent={
        <BookCardHeader
          bookName={bookData.name}
          authorId={bookData.author_id}
        />
      }
      CardBodyComponent={<></>}
      CardStartComponent={<BookCardStart bookData={bookData} />}
      containerClass={containerClassName}
    />
  )
}

export default BooksCard
