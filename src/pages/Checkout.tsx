import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import RadioInput from '../components/forms/RadioInput'
import TextInput from '../components/forms/TextInput'
import CartItem from '../components/layout/Header/Cart/CartItem'
import OrderCompleteModal from '../components/layout/OrderComplete'
import { useCart } from '../context/useCart'
import { TCheckoutSchema } from '../lib/types'
import { CheckoutSchema } from '../lib/schemas'
import { formatedNumber } from '../lib/utils'

export default function Checkout() {
  const { cart } = useCart()
  const [orderComplete, setOrderComplete] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCheckoutSchema>({ resolver: zodResolver(CheckoutSchema) })

  const onSubmit = async (data: TCheckoutSchema) => {
    // temporary code
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('data', data)
    /////////////////

    setOrderComplete(true)
    reset()
  }

  const total = cart.reduce(
    (acc, curItem) => acc + curItem.product.price * curItem.quantity,
    0
  )
  const shipping = total > 0 ? 50 : 0
  const tax = 0.2 * total
  const grandTotal = total + shipping + tax

  return (
    <>
      <section className='flex flex-col xl:flex-row gap-[30px] w-full items-center'>
        <form className='rounded-lg lg:h-[1156px] w-full flex-2 bg-white py-14 px-12'>
          <h1 className='h3 mb-8'>Checkout</h1>

          <h2 className='text-subtitle mb-4'>Billing details</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mb-[53px]'>
            <TextInput
              type='text'
              label='Name'
              placeholder='Alexei Ward'
              register={register}
              errors={errors}
            />
            <TextInput
              type='text'
              label='Email Address'
              placeholder='alexei@mail.com'
              register={register}
              errors={errors}
            />
            <TextInput
              type='text'
              label='Phone Number'
              placeholder='+1 202-555-0136'
              register={register}
              errors={errors}
            />
          </div>

          <h2 className='text-subtitle mb-4'>Shipping info</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mb-[53px]'>
            <TextInput
              type='text'
              label='Address'
              placeholder='1137 Williams Avenue'
              className='col-span-1 md:col-span-2 w-full'
              register={register}
              errors={errors}
            />
            <TextInput
              type='text'
              label='ZIP Code'
              placeholder='10001'
              register={register}
              errors={errors}
            />
            <TextInput
              type='text'
              label='City'
              placeholder='New York'
              register={register}
              errors={errors}
            />
            <TextInput
              type='text'
              label='Country'
              placeholder='United States'
              register={register}
              errors={errors}
            />
          </div>

          <h2 className='text-subtitle mb-4'>Payment details</h2>
          <RadioInput
            label='Payment Method'
            options={['e-Money', 'Cache on Delivary']}
            className='flex max-md:flex-col md:justify-between gap-4 mb-6 w-full'
            register={register}
            errors={errors}
          />
        </form>

        <div className='rounded-lg lg-h-[612px] min-w-[350px] w-full flex-1 bg-white p-8 self-start'>
          <h2 className='h6 mb-[31px] text-[18px]'>Summary</h2>

          {cart.length > 0 ? (
            <div className='flex flex-col gap-6 mb-8'>
              {cart.map((item) => (
                <CartItem key={item.product.id} cartItem={item} isCheckout />
              ))}
            </div>
          ) : (
            <div className='mb-8 opacity-50 text-center'>
              Your cart is empty
            </div>
          )}

          <div className='mb-6'>
            <div className='flex justify-between mb-2'>
              <p className='opacity-50 uppercase'>Total</p>
              <p className='h6 text-[18px]'>${formatedNumber(total)}</p>
            </div>
            <div className='flex justify-between mb-2'>
              <p className='opacity-50 uppercase'>Shipping</p>
              <p className='h6 text-[18px]'>$ {formatedNumber(shipping)}</p>
            </div>
            <div className='flex justify-between mb-2'>
              <p className='opacity-50 uppercase'>Vat (included)</p>
              <p className='h6 text-[18px]'>$ {formatedNumber(tax)}</p>
            </div>
          </div>
          <div className='flex justify-between mb-6'>
            <p className='opacity-50 uppercase'>Grand total</p>
            <p className='h6 text-[18px] text-primaryPeach'>
              $ {formatedNumber(grandTotal)}
            </p>
          </div>

          <button className='btn peach w-full' onClick={handleSubmit(onSubmit)}>
            continue & pay
          </button>
        </div>
      </section>

      {orderComplete ? (
        <OrderCompleteModal
          cart={cart}
          total={grandTotal}
          close={() => setOrderComplete(false)}
        />
      ) : null}
    </>
  )
}
