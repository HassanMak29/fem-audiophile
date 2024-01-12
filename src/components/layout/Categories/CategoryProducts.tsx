import data from '../../../assets/data.json'
import Product from '../Product/Product'

interface CategoryProductsProps {
  categoryName: string
}

export default function CategoryProducts({
  categoryName,
}: CategoryProductsProps) {
  return (
    <section className='w-full flex flex-col gap-40'>
      {data
        .filter((product) => product.category === categoryName)
        .sort((a, b) => b.id - a.id)
        .map((product, i) => (
          <Product
            key={product.name}
            product={product}
            index={i}
            isCategoryProduct
          />
        ))}
    </section>
  )
}
