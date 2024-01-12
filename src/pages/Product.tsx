import { useParams } from 'react-router-dom'
import Categories from '../components/layout/Categories/Categories'
import AboutUs from '../components/layout/AboutUs/AboutUs'
import ProductDetails from '../components/layout/Product/ProductDetails'

export default function Product() {
  const { productSlug } = useParams()

  return (
    <>
      {productSlug ? <ProductDetails productSlug={productSlug} /> : null}
      <Categories />
      <AboutUs />
    </>
  )
}
