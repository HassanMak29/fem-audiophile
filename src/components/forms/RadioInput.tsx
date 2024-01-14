import { ReactNode, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { cn } from '../../lib/utils'
import { TCheckoutSchema } from '../../lib/types'
import TextInput from './TextInput'
import CacheOnDelivaryIcon from '../icons/CachOnDelivaryIcon'

interface TextInputProps {
  register: UseFormRegister<TCheckoutSchema>
  label: string
  options: string[]
  errors?: FieldErrors<TCheckoutSchema>
  className?: string
}
export default function RadioInput({
  register,
  label,
  options,
  errors,
  className,
}: TextInputProps) {
  const [value, setValue] = useState('e-money')
  const name = label.split(' ').join('-').toLowerCase() as keyof TCheckoutSchema

  return (
    <>
      <div className={cn('w-[300px]', className)}>
        <div className='flex justify-between flex-1'>
          <label
            htmlFor={name}
            className={cn(
              'text-[12px] font-bold tracking-[-0.214px] mb-[9px] block',
              { 'text-error': errors?.[name] }
            )}>
            {label}
          </label>
          <span className='text-[12px] text-error font-medium tracking-[-0.214px] mb-[9px] block'>
            {errors?.[name]?.message as ReactNode}
          </span>
        </div>
        <div className='flex flex-col w-full gap-4 flex-1'>
          {options.map((opt) => {
            const optValue = opt.split(' ').join('-').toLowerCase()
            return (
              <div
                key={opt}
                className={cn(
                  'h-14 w-full py-[18px] px-6 rounded-lg bg-white shrink-0 text-[14px] font-bold -tracking-[0.25px] placeholder:opacity-40 border-[1px] border-[#CFCFCF] hover:border-primaryPeach focus:outline-none focus:border-primaryPeach focus:ring-0 flex items-center',
                  {
                    'border-error border-2 hover:border-error': errors?.[name],
                  },
                  {
                    'border-primaryPeach': value === optValue,
                  }
                )}
                onClick={() => setValue(optValue)}>
                <label htmlFor={optValue} className='flex items-center'>
                  <input
                    type='radio'
                    id={optValue}
                    className='hidden'
                    {...register(name, { value: optValue })}
                  />
                  <div className='rounded-full h-4 w-4 bg-white flex items-center justify-center mr-2 border-[1px] border-[#CFCFCF]'>
                    {value === optValue ? (
                      <div className='rounded-full h-2 w-2 bg-primaryPeach' />
                    ) : null}
                  </div>
                  {opt}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      {value === 'e-money' ? (
        <div className='flex max-md:flex-col gap-4'>
          <TextInput
            type='number'
            label='e-Money Number'
            placeholder='238521993'
            register={register}
            errors={errors}
          />
          <TextInput
            type='number'
            label='e-Money Pin'
            placeholder='6891'
            register={register}
            errors={errors}
          />
        </div>
      ) : (
        <div className='flex items-center gap-8'>
          <div>
            <CacheOnDelivaryIcon />
          </div>
          <p className='opacity-50'>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </>
  )
}
