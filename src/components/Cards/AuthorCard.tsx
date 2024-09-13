import { Author } from '@/services/data/entities/Author'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'

type AuthorCardProps = {
  authorData: Author
}

const getBooksAuthoredCount = async (authorId: number) => {
  const response = await axios.get<{
    count: number
  }>(`/books?authorId=${authorId}&select=count`)
  return response.data
}

const AuthorCardHeader = ({ authorData }: AuthorCardProps) => {
  const { data: booksAuthoredDataCount } = useQuery({
    queryKey: [`books?authorId=${authorData.id}&select=count`, authorData.id],
    queryFn: () => getBooksAuthoredCount(authorData.id),
  })

  if (!booksAuthoredDataCount) {
    return <div>Loading...</div>
  }

  const authorName = `${authorData.first_name} ${authorData.last_name}`
  return (
    <div>
      <p className="font-medium capitalize">{authorName}</p>
      <p className="space-x-1 text-sm">
        <span>Publish Books:</span>
        <span>{booksAuthoredDataCount.count}</span>
      </p>
    </div>
  )
}

const AuthorCard = ({ authorData }: AuthorCardProps) => {
  return (
    <Card
      CardStartComponent={
        <figure className="h-full rounded-md overflow-hidden ">
          <img
            className="h-full object-cover"
            src="https://picsum.photos/200"
            alt=""
          />
        </figure>
      }
      CardHeaderCompoonent={<AuthorCardHeader authorData={authorData} />}
      CardBodyComponent={
        <div className="flex justify-end">
          <Link
            className="bg-[#D86128] px-2 py-1.5 text-white rounded-sm"
            to={`link/to/view/profile/page/${authorData.id}`}
          >
            View Profile
          </Link>
        </div>
      }
    />
  )
}

export default AuthorCard
