import { Link } from 'react-router-dom'
import { cn } from '../../../lib/utils'
import ArrowIcon from '../../icons/ArrowIcon'

interface CategoryCardProps {
  img: string
  title: string
}

export default function CategoryCard({ img, title }: CategoryCardProps) {
  return (
    <div className='max-md:w-[327px] md:flex-1 h-[165px] lg:h-[204px] rounded-lg bg-primaryGray relative pt-[88px] lg:pt-[116px] flex items-center flex-col lg:gap-[15px] gap-[17px]'>
      <div
        className={cn(
          'absolute z-10 w-[55%] md:max-lg:w-[60%] h-full bg-center bg-cover bg-no-repeat -top-[60px] md:-top-[60px] lg:-top-[40%]',
          img
        )}
      />
      <h6 className='max-lg:text-[15px]'>{title}</h6>
      <Link to={`/category/${title}`}>
        <button className='flex items-center gap-2'>
          <span className='uppercase text-[13px] font-bold tracking-[1px] text-black opacity-50 hover:opacity-100 hover:text-primaryPeach transition leading-normal'>
            shop
          </span>
          <ArrowIcon />
        </button>
      </Link>
    </div>
  )
}
