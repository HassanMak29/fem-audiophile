import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { productId } = useParams()

  return <div>ProductDetails / {productId}</div>
}
