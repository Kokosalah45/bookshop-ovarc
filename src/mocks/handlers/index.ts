import { http, HttpResponse } from 'msw'

import authors from './data/authors.json'
import books from './data/books.json'
import stores from './data/stores.json'

let authorsObject = authors
let booksObject = books
let storesObject = stores

const DEFAULT_LIMIT = booksObject.length
const DEFAULT_SKIP = 0

export const handlers = [
  http.get('/authors', () => {
    return HttpResponse.json(authorsObject)
  }),

  http.get('/authors/:id', ({ params }) => {
    const { id } = params
    const author = authorsObject.find((author) => author.id === +id)

    return HttpResponse.json(author)
  }),

  http.get('/books', ({ request }) => {
    const url = new URL(request.url)
    const skip = url.searchParams.get('skip') || DEFAULT_SKIP
    const limit = url.searchParams.get('limit') || DEFAULT_LIMIT
    const selectParam = url.searchParams.get('select') || ''
    const select = selectParam.split(',')
    const authorId = url.searchParams.get('authorId')
    const storeId = url.searchParams.get('storeId')
    const bookName = url.searchParams.get('bookName')
    let books = booksObject

    if (authorId) {
      const booksByAuthor = booksObject.filter(
        (book) => book.author_id === +authorId,
      )
      books = booksByAuthor
    }

    if (bookName) {
      const booksByName = booksObject.filter((book) =>
        book.name.toLowerCase().includes(bookName.toLowerCase()),
      )
      books = booksByName
    }

    if (select.includes('count')) {
      return HttpResponse.json({
        count: books.length,
      })
    }

    if (skip && limit) {
      books = books.slice(+skip, +skip + +limit)
    }

    return HttpResponse.json(books)
  }),

  http.delete('/books/:id', ({ params }) => {
    const { id } = params

    booksObject = booksObject.filter((book) => book.id !== +id)

    return HttpResponse.json(booksObject)
  }),

  http.get('/stores', () => {
    return HttpResponse.json(storesObject)
  }),
]
