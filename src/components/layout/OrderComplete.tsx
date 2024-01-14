import { Link } from 'react-router-dom'
import { TCartItem } from '../../lib/types'
import OrderCompleteIcon from '../icons/OrderCompleteIcon'
import CartItem from './Header/Cart/CartItem'
import { Overlay } from './Overlay'
import { formatedNumber } from '../../lib/utils'

interface OrderCompleteModalProps {
  cart: TCartItem[]
  total: number
  close: () => void
}

export default function OrderCompleteModal({
  cart,
  total,
  close,
}: OrderCompleteModalProps) {
  return (
    <div className='z-10'>
      <Overlay clickHandler={close} />
      <div className='absolute inset-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-8 md:p-12 bg-white w-full max-w-[540px] min-w-[300px] h-[600px] md:h-[581px] z-10 rounded-lg'>
        <div className='mb-[23px] md:mb-[33px]'>
          <OrderCompleteIcon />
        </div>
        <h3 className='mb-4 md:mb-6'>
          <span className='block'>Thank you</span> for your order
        </h3>
        <p className='opacity-50 mb-6 md:mb-[33px]'>
          You will receive an email confirmation shortly.
        </p>

        <div className='rounded-lg w-full md:w-[444px] h-[232px] md:h-[140px] flex md:flex-row flex-col overflow-hidden mb-[23px] md:mb-12'>
          <div className='bg-primaryGray md:w-[60%] h-full p-6 flex flex-col items-center'>
            <div className='w-full'>
              <CartItem cartItem={cart[0]} isCheckout />
            </div>

            {cart.length > 2 ? (
              <>
                <hr className='w-full my-3' />
                <div className='opacity-50'>
                  and {cart.length - 1} other item(s)
                </div>
              </>
            ) : null}
          </div>

          <div className='bg-primaryBlack md:w-[40%] h-[92px] md:h-full p-6 max-md:py-[15px]'>
            <p className='uppercase text-white opacity-50 mb-2'>Grand total</p>
            <p className='h6 text-[18px] text-white'>
              $ {formatedNumber(total)}
            </p>
          </div>
        </div>

        <Link to='/'>
          <button className='btn peach w-full'>Back to home</button>
        </Link>
      </div>
    </div>
  )
}
