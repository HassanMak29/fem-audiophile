import { useRef } from 'react'
import Categories from '../../Categories/Categories'
import useClickOutside from '../../../../hooks/useClickOutside'

interface MobileModalProps {
  iconRef: any
  close: () => void
}
export default function MobileModal({ iconRef, close }: MobileModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, iconRef, close)

  return (
    <div
      ref={ref}
      className='absolute rounded-b-lg inset-0 top-24 bg-white z-10 h-max py-16 px-10 '>
      <Categories close={close} />
    </div>
  )
}
