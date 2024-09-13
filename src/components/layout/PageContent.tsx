import { PropsWithChildren } from 'react'
import Header from './Header'

const PageContent = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex flex-col bg-[#F1F1F1] min-h-screen px-[30px]">
      <Header />
      <section>{children}</section>
    </main>
  )
}

export default PageContent
