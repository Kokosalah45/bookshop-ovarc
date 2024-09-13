import { Store } from '@/services/data/entities/Store'
import Card from '../ui/Card'

type StoreCardProps = {
  storeData: Store
}

const StoreCardHeader = ({ storeData }: StoreCardProps) => {
  const storeName = storeData.name

  const storeAddress = storeData.address_1
  const storeCity = storeData.city
  const storeState = storeData.state

  return (
    <div>
      <p className="font-medium capitalize">{storeName}</p>
      <p className="space-x-1 text-sm">
        <span>{storeAddress}</span>
        <span>{storeCity}</span>
        <span>{storeState}</span>
      </p>
    </div>
  )
}

const StoreCard = ({ storeData }: StoreCardProps) => {
  return (
    <Card
      CardStartComponent={
        <figure className="h-full rounded-md overflow-hidden ">
          <img
            className="h-full object-cover"
            src="https://picsum.photos/200?random=1"
            alt=""
          />
        </figure>
      }
      CardHeaderCompoonent={<StoreCardHeader storeData={storeData} />}
      CardBodyComponent={<></>}
    />
  )
}

export default StoreCard
