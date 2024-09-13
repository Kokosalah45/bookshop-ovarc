import { Book } from '@/services/data/entities/Book'
import { ColumnDef, getPaginationRowModel } from '@tanstack/react-table'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getBooks } from '@/services/data/books/getBooks'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

// TODO: do the editing with content if you have time
// const EditableCell = ({
//     value,
//     onSubmit,
//     id,
//   }: {
//     value: string
//     onSubmit: () => void
//     id: number
//   }) => {
//     const currentEditId = useCellEditableContext()

//     return currentEditId === id ? (
//       <input
//         value={value}
//         onChange={(e) => {
//           onSubmit()
//         }}
//       />
//     ) : (
//       <span>{value}</span>
//     )
//   }

//   const EditableContext = createContext<{}>({})

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'isbn',
    header: 'ISBN',
  },
  {
    accessorKey: 'language',
    header: 'Language',
  },
  {
    accessorKey: 'page_count',
    header: 'Page Count',
  },
  {
    accessorKey: 'format',
    header: 'Format',
  },
]

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

const BooksAdminPage = () => {
  const { data, isLoading, refetch, status } = useQuery({
    queryKey: ['books'],
    queryFn: () => getBooks(),
  })

  const [currentData, setCurrentData] = useState<Book[]>(data || [])

  useEffect(() => {
    if (status === 'success') {
      setCurrentData(data || [])
    }
  }, [data, status])

  const dataColumns = useMemo(() => {
    return [
      ...columns,
      {
        id: 'actions',
        cell: ({ row }) => {
          const book = row.original

          return (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  fetch(`/books/${book.id}`, {
                    method: 'DELETE',
                  })
                  refetch()
                }}
              >
                Delete
              </Button>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          )
        },
      },
    ]
  }, [refetch])

  if (isLoading) {
    return <div>Loading</div>
  }

  return <DataTable columns={dataColumns} data={currentData} />
}

export default BooksAdminPage
