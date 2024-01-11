import { cn } from '../../lib/utils'

interface ArrowIconProps {
  className?: string
}
export default function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <>
      <svg
        width='8'
        height='12'
        xmlns='http://www.w3.org/2000/svg'
        className={cn(
          'fill-white hover:fill-primaryPeach transition cursor-pointer',
          className
        )}>
        <path
          d='M1.322 1l5 5-5 5'
          stroke='#D87D4A'
          strokeWidth='2'
          fill='none'
          fill-rule='evenodd'
        />
      </svg>
    </>
  )
}
