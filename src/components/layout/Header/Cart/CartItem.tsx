import { useCart } from '../../../../context/useCart'
import { TCartItem } from '../../../../lib/types'
import { cn, formatedNumber } from '../../../../lib/utils'
import CountInput from '../../../forms/CountInput'

interface CartItemProps {
  cartItem: TCartItem
  isCheckout?: boolean
}

export default function CartItem({ cartItem, isCheckout }: CartItemProps) {
  const { addProduct, removeProduct } = useCart()

  if (!cartItem) return
  return (
    <div
      className={cn('flex justify-between', { 'items-center': !isCheckout })}>
      <div className='flex gap-4'>
        <img
          src={cartItem.product.image.mobile.replace('.', '')}
          alt=''
          className='w-14 h-14 object-cover rounded-lg'
        />
        <div className='flex flex-col'>
          <p className='font-bold'>
            {cartItem.product.name
              .split(' ')
              .filter((s) => s.toLowerCase() !== cartItem.product.category)}
          </p>
          <p className='font-bold opacity-50'>
            $ {formatedNumber(cartItem.product.price)}
          </p>
        </div>
      </div>
      {isCheckout ? (
        <div className='opacity-50'>x{cartItem.quantity}</div>
      ) : (
        <CountInput
          count={cartItem.quantity}
          increase={() => addProduct(cartItem.product)}
          decrease={() => removeProduct(cartItem.product)}
          className='h-8 w-24'
        />
      )}
    </div>
  )
}
