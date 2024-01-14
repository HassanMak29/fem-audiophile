import { useRef, useState } from 'react'
import HamburgerMenuIcon from '../../../icons/HamburgerMenuIcon'
import { Overlay } from '../../Overlay'
import MobileModal from './MobileModal'

interface MobileNavigationProps {
  className?: string
}
export default function MobileNavigation({ className }: MobileNavigationProps) {
  const iconRef = useRef<SVGSVGElement | null>(null)
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)
  const toggleOpen = () => setOpen((prev) => !prev)

  return (
    <div className={className}>
      {open ? <Overlay clickHandler={close} /> : null}
      <>
        <HamburgerMenuIcon ref={iconRef} onClick={toggleOpen} />
        {open ? <MobileModal close={close} iconRef={iconRef} /> : null}
      </>
    </div>
  )
}
