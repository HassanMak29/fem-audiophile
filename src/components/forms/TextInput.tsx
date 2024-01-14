import { ReactNode } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { cn } from '../../lib/utils'
import { TCheckoutSchema } from '../../lib/types'

interface TextInputProps {
  register: UseFormRegister<TCheckoutSchema>
  type: 'text' | 'number'
  label: string
  placeholder: string
  errors?: FieldErrors<TCheckoutSchema>
  className?: string
}

export default function TextInput({
  register,
  type,
  label,
  placeholder,
  errors,
  className,
}: TextInputProps) {
  const name = label.split(' ').join('-').toLowerCase() as keyof TCheckoutSchema

  return (
    <div className={cn('w-full', className)}>
      <div className='flex justify-between'>
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
      <input
        type={type}
        className={cn(
          'h-14 w-full py-[18px] px-6 rounded-lg bg-white shrink-0 text-[14px] font-bold -tracking-[0.25px] placeholder:opacity-40 border-[1px] border-[#CFCFCF] hover:border-primaryPeach focus:outline-none focus:border-primaryPeach focus:ring-0 flex items-center',
          { 'border-error border-2 hover:border-error': errors?.[name] }
        )}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  )
}
