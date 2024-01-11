import { useRef } from 'react'
import useClickOutside from '../../../../hooks/useClickOutside'

interface CartModalProps {
  iconRef: any
  close: () => void
}

export default function CartModal({ close, iconRef }: CartModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, iconRef, close)

  return (
    <div
      ref={ref}
      className='absolute min-h-[488px] w-[327px] lg:w-[377px] rounded-lg bg-red-100 top-[79px] md:top-[80px] lg:top-[97px] right-0'>
      cart
    </div>
  )
}
