type CardProps = {
  CardHeaderCompoonent: React.ReactNode
  CardBodyComponent: React.ReactNode
  CardStartComponent: React.ReactNode
  containerClass?: string
}

const Card = ({
  CardHeaderCompoonent,
  CardBodyComponent,
  CardStartComponent,
  containerClass,
}: CardProps) => {
  return (
    <div
      className={`flex gap-3 rounded-md w-3/12 flex-shrink-0 bg-white p-5 mx-2 ${
        containerClass || ''
      }`}
    >
      <div className="rounded-md flex-shrink-0 w-1/3">{CardStartComponent}</div>
      <div className="flex flex-col flex-1 justify-between">
        <div>{CardHeaderCompoonent}</div>
        <div>{CardBodyComponent}</div>
      </div>
    </div>
  )
}

export default Card
