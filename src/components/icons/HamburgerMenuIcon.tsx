import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface HamburgerMenuIconProps {
  className?: string
  onClick: any
}
export default forwardRef(function HamburgerMenuIcon(
  { className, onClick }: HamburgerMenuIconProps,
  ref: React.ForwardedRef<SVGSVGElement | null>
) {
  return (
    <svg
      ref={ref}
      width='16'
      height='15'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('group cursor-pointer z-40', className)}
      onClick={onClick}>
      <g
        fill='#FFF'
        fillRule='evenodd'
        className={cn(
          'fill-white group-hover:fill-primaryPeach transition cursor-pointer'
        )}>
        <path d='M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z' />
      </g>
    </svg>
  )
})
