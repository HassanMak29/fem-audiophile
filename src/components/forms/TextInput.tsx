import { cn } from '../../lib/utils'

interface TextInputProps {
  type: 'text' | 'number'
  label: string
  placeholder: string
  error?: string
}

export default function TextInput({
  type,
  label,
  placeholder,
  error,
}: TextInputProps) {
  return (
    <div>
      <div className='flex justify-between'>
        <label
          htmlFor={label.split(' ').join('-')}
          className={cn(
            'text-[12px] font-bold tracking-[-0.214px] mb-[9px] block',
            { 'text-error': error }
          )}>
          {label}
        </label>
        <span className='text-[12px] text-error font-medium tracking-[-0.214px] mb-[9px] block'>
          {error}
        </span>
      </div>
      <input
        name={label.split(' ').join('-')}
        type={type}
        className={cn(
          'h-14 w-[309px] py-[18px] px-6 rounded-lg bg-white shrink-0 text-[14px] font-bold -tracking-[0.25px] placeholder:opacity-40 border-[1px] border-[#CFCFCF] hover:border-primaryPeach focus:outline-none focus:border-primaryPeach focus:ring-0 flex items-center',
          { 'border-error border-2 hover:border-error': error }
        )}
        placeholder={placeholder}
      />
    </div>
  )
}
