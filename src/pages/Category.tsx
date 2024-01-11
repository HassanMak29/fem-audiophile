import { Link, useParams } from 'react-router-dom'
import data from '../assets/data.json'
import { cn } from '../lib/utils'

export default function Category() {
  const { categoryName } = useParams()

  return (
    <section className='w-full flex flex-col gap-40'>
      {data
        .filter((product) => product.category === categoryName)
        .sort((a, b) => b.id - a.id)
        .map((product, i) => {
          return (
            <div
              key={product.name}
              className='flex flex-col lg:flex-row w-full h-[705px] lg:h-[560px] max-lg:gap-[52px]'>
              <div className='lg:w-[50%] h-full relative'>
                <img
                  src={product.categoryImage.mobile.replace('.', '')}
                  alt={product.name}
                  className='absolute md:hidden inset-0 w-full h-full object-cover rounded-lg'
                />
                <img
                  src={product.categoryImage.tablet.replace('.', '')}
                  alt={product.name}
                  className='absolute hidden md:max-lg:block inset-0 w-full h-full object-cover rounded-lg'
                />
                <img
                  src={product.categoryImage.desktop.replace('.', '')}
                  alt={product.name}
                  className='absolute max-lg:hidden inset-0 w-full h-full object-cover rounded-lg'
                />
              </div>
              <div
                className={cn(
                  'lg:w-[50%] flex flex-col justify-center lg:pl-[125px] max-lg:items-center',
                  {
                    'lg:order-first': i === 1,
                  },
                  { 'lg:pl-0 lg:pr-[125px]': i === 1 }
                )}>
                {product.new ? (
                  <p className='text-primaryPeach text-overline mb-6'>
                    new product
                  </p>
                ) : null}
                <h2 className='mb-6 max-md:text-[36px] max-lg:text-center max-lg:max-w-[372px]'>
                  {product.name}
                </h2>
                <p className='opacity-50 mb-10 max-lg:text-center max-lg:max-w-[572px]'>
                  {product.description}
                </p>
                <Link to={`/products/${product.category}/${product.id}`}>
                  <button className='btn peach'>see product</button>
                </Link>
              </div>
            </div>
          )
        })}
    </section>
  )
}
