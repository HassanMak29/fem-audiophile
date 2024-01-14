import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../../../context/useCart'
import useClickOutside from '../../../../hooks/useClickOutside'
import CartItem from './CartItem'
import { formatedNumber } from '../../../../lib/utils'
interface CartModalProps {
  iconRef: any
  close: () => void
}

export default function CartModal({ close, iconRef }: CartModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { cart, removeAll } = useCart()
  useClickOutside(ref, iconRef, close)

  return (
    <div
      ref={ref}
      className='absolute min-h-[488px] w-[327px] md:w-[377px] rounded-lg bg-white top-[79px] md:top-[80px] lg:top-[97px] right-0 p-8 flex flex-col justify-between'>
      <div>
        <div className='flex justify-between mb-[31px]'>
          <h6>Cart ({cart.length})</h6>
          <button
            className='hover:underline opacity-50 hover:text-primaryPeach'
            onClick={removeAll}>
            Remove all
          </button>
        </div>

        <div className='max-h-[340px] overflow-auto mb-8'>
          {cart.length > 0 ? (
            <div className='flex flex-col gap-6'>
              {cart.map((item) => (
                <CartItem key={item.product.id} cartItem={item} />
              ))}
            </div>
          ) : (
            <div className='mb-8 opacity-50 text-center'>
              Your cart is empty
            </div>
          )}
        </div>
      </div>

      <div>
        <div className='flex justify-between mb-6'>
          <p className='opacity-50 uppercase'>Total</p>
          <p className='h6'>
            $
            {formatedNumber(
              cart.reduce(
                (acc, cur) => acc + cur.product.price * cur.quantity,
                0
              )
            )}
          </p>
        </div>

        <Link to='/checkout'>
          <button className='btn peach w-full' onClick={close}>
            Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}
