import { useRef, useState } from 'react'
import CartIcon from '../../../icons/CartIcon'
import CartModal from './CartModal'
import { Overlay } from '../../Overlay'

export default function Cart() {
  const iconRef = useRef<SVGSVGElement | null>(null)
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  const toggleOpen = () => setOpen((prev) => !prev)

  return (
    <>
      {open ? <Overlay clickHandler={close} /> : null}
      <div className='relative z-10'>
        <CartIcon ref={iconRef} onClick={toggleOpen} />
        {open ? <CartModal close={close} iconRef={iconRef} /> : null}
      </div>
    </>
  )
}
