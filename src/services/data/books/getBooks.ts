import axios from 'axios'
import { Book } from '../entities/Book'

type GetBooksParams = {
  authorId?: number
  storeId?: number
  bookName?: string
}
export const getBooks = async (authorIdParams?: GetBooksParams) => {
  const response = await axios.get<Book[]>('/books', {
    params: authorIdParams,
  })
  return response.data
}
