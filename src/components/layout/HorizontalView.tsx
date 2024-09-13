import React from 'react'

type Props<T> = {
  data: T[] | undefined
  renderItem: (items: T) => React.ReactNode
  headerComponent?: React.ReactNode
}
const HorizontalView = <T,>({
  data = [],
  renderItem,
  headerComponent,
}: Props<T>) => {
  return (
    <div className=" my-10">
      {headerComponent && <div className="mb-5">{headerComponent}</div>}
      <div className="flex overflow-x-auto h-[300px]">
        {data.map((item) => renderItem(item))}
      </div>
    </div>
  )
}

export default HorizontalView
