import { useParams } from 'react-router-dom'
import AboutUs from '../components/layout/AboutUs/AboutUs'
import Categories from '../components/layout/Categories/Categories'
import CategoryProducts from '../components/layout/Categories/CategoryProducts'

export default function Category() {
  const { categoryName } = useParams()

  return (
    <>
      {categoryName ? <CategoryProducts categoryName={categoryName} /> : null}
      <Categories />
      <AboutUs />
    </>
  )
}
