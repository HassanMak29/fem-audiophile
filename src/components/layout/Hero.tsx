import { Link, useParams } from 'react-router-dom'
import { cn } from '../../lib/utils'

export default function Hero() {
  const params = useParams()
  const isHome = Object.keys(params).length === 0
  const isCategory = params.categoryName

  return (
    <section
      className={cn(
        'w-full',
        { 'h-[510px] md:h-[633px]': isHome },
        { 'h-max': isCategory }
      )}>
      <div
        className={cn(
          'h-full w-full',
          {
            "bg-[url('./assets/home/mobile/image-header.jpg')] md:bg-[url('./assets/home/tablet/image-header.jpg')] lg:bg-[url('./assets/home/desktop/image-hero.jpg')] bg-cover bg-no-repeat bg-bottom":
              isHome,
          },
          {
            'bg-primaryBlack h-[102px] md:h-[246px] lg:h-[336px] flex items-center justify-center':
              isCategory,
          }
        )}>
        {isCategory ? (
          <h2 className='text-white'>{params.categoryName}</h2>
        ) : null}
        {isHome ? (
          <div className='mx-auto lg:mr-auto text-white py-[108px] md:py-[128px] px-6 md:px-[65px] lg:px-[165px] max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center'>
            <p className=' text-overline mb-6'>new product</p>
            <h1 className='mb-6 w-[300px] md:w-[396px] max-md:text-[36px]'>
              XX99 Mark II Headphones
            </h1>
            <p className='opacity-75 mb-10 w-[300px] md:w-[349px]'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to='/products/headphones/4'>
              <button className='btn peach'>see product</button>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
