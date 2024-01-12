import { Link } from 'react-router-dom'
import data from '../../../assets/data.json'
import { TProduct } from '../../../types'
import ResponsiveImage from '../ResponsiveImage'
import Product from './Product'

interface ProductDetailsProps {
  productSlug: string
}

export default function ProductDetails({ productSlug }: ProductDetailsProps) {
  const product = data.find((p: TProduct) => p.slug === productSlug)
  console.log(data)
  if (!product) return

  return (
    <section className='w-full flex flex-col gap-40'>
      <Product key={product.name} product={product} index={0} />

      <div className='flex max-lg:flex-col gap-[125px]'>
        <div className='flex flex-col gap-8 max-w-[635px]'>
          <h3>Features</h3>
          <div>
            {product.features.split('\n').map((paragraph) => (
              <p
                key={paragraph.slice(20)}
                className='opacity-50 mb-4 last:mb-0'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-8 md:max-lg:flex-row'>
          <h3 className='md:max-lg:w-[339px]'>In the box</h3>
          <ul className='flex flex-col gap-2 min-w-[200px]'>
            {product.includes.map((f) => (
              <li key={f.item}>
                <span className='text-primaryPeach mr-[21px]'>
                  {f.quantity}x
                </span>
                <span className='opacity-50'>{f.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='h-[788px] md:h-[368px] lg:h-[592px] flex max-md:flex-col gap-6'>
        <div className='flex flex-col h-full md:w-[50%] gap-6'>
          <div className='w-full h-full relative'>
            <ResponsiveImage image={product.gallery.first} alt={product.name} />
          </div>
          <div className='w-full h-full relative'>
            <ResponsiveImage
              image={product.gallery.second}
              alt={product.name}
            />
          </div>
        </div>
        <div className='md:w-[50%] h-full relative'>
          <ResponsiveImage image={product.gallery.third} alt={product.name} />
        </div>
      </div>

      <div className='flex flex-col items-center w-full h-[983px] md:h-[571px] gap-10 md:gap-16'>
        <h3>You may also like</h3>
        <div className='flex max-md:flex-col w-full h-full gap-14 md:gap-[11px] lg:gap-[30px] items-center justify-center'>
          {product.others.map((p) => (
            <div
              key={p.slug}
              className='flex flex-col items-center w-full flex-1 h-full max-w-[327px]'>
              <div
                key={p.slug}
                className='w-full h-full relative mb-8 md:mb-10'>
                <ResponsiveImage image={p.image} alt={p.name} />
              </div>
              <h4 className='mb-8'>{p.name}</h4>
              <Link to={`/product/${p.slug}`}>
                <button className='btn peach'>see product</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
