import { useRef, useState } from 'react'
import CartIcon from '../../../icons/CartIcon'
import CartModal from './CartModal'

function Overlay({ clickHandler }: { clickHandler: () => void }) {
  return (
    <div
      className='absolute bottom-0 left-0 right-0 top-[94px] h-screen bg-black opacity-20'
      onClick={clickHandler}
    />
  )
}

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
