// import data from '../../../assets/data.json'
import { Link } from 'react-router-dom'
import { cn } from '../../../lib/utils'
import { TProduct } from '../../../lib/types'
import CountInput from '../../forms/CountInput'
import ResponsiveImage from '../ResponsiveImage'
import { useCart } from '../../../context/useCart'
import { useState } from 'react'

interface ProductProps {
  product: TProduct
  index?: number
  isCategoryProduct?: boolean
}

export default function Product({
  product,
  index,
  isCategoryProduct,
}: ProductProps) {
  const { addProduct } = useCart()
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    setQuantity((prevQnt) => prevQnt + 1)
  }
  const decrease = () => {
    setQuantity((prevQnt) => (prevQnt > 1 ? prevQnt - 1 : 0))
  }

  return (
    <div
      className={cn(
        'flex flex-col lg:flex-row w-full h-[705px] lg:h-[560px] max-lg:gap-[52px]',
        { 'flow-col md:flex-row': !isCategoryProduct }
      )}>
      <div
        className={cn('lg:w-[50%] h-full relative', {
          'md:w-[50%]': !isCategoryProduct,
        })}>
        <ResponsiveImage
          image={product[isCategoryProduct ? 'categoryImage' : 'image']}
          alt={product.name}
        />
      </div>
      <div
        className={cn(
          'lg:w-[50%] flex flex-col justify-center lg:pl-[125px] max-lg:items-center',
          {
            'lg:order-first lg:pl-0 lg:pr-[125px]': index === 1,
          },
          { 'max-lg:items-start': !isCategoryProduct }
        )}>
        {product.new ? (
          <p className='text-primaryPeach text-overline mb-6'>new product</p>
        ) : null}
        <h2
          className={cn(
            'mb-6 max-md:text-[36px] max-lg:text-center max-lg:max-w-[372px]',
            { 'max-lg:text-start max-lg:max-w-[339px]': !isCategoryProduct }
          )}>
          {product.name}
        </h2>
        <p
          className={cn(
            'opacity-50 mb-10 max-lg:text-center max-lg:max-w-[572px]',
            { 'max-lg:text-start max-lg:max-w-[339px]': !isCategoryProduct }
          )}>
          {product.description}
        </p>
        {isCategoryProduct ? (
          <Link to={`/product/${product.slug}`}>
            <button className='btn peach'>see product</button>
          </Link>
        ) : (
          <div className='flex flex-col gap-12'>
            <div>$ {product.price}</div>
            <div className='flex gap-4'>
              <CountInput
                count={quantity}
                increase={increase}
                decrease={decrease}
              />
              <button
                className='btn peach'
                onClick={() => addProduct(product, quantity)}>
                add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
