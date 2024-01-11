import { cn } from '../../lib/utils'

interface HamburgerMenuIconProps {
  className?: string
  onClick: () => void
}
export default function HamburgerMenuIcon({
  className,
  onClick,
}: HamburgerMenuIconProps) {
  return (
    <svg
      width='16'
      height='15'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('group cursor-pointer', className)}
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
}
