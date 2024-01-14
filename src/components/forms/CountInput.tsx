// import { useState } from 'react'

import { cn } from '../../lib/utils'

interface CountInputProps {
  count: number
  increase: () => void
  decrease: () => void
  className?: string
}

export default function CountInput({
  count = 1,
  increase,
  decrease,
  className,
}: CountInputProps) {
  return (
    <div
      className={cn(
        'flex h-12 w-[120px] bg-primaryGray items-center text-[13px]',
        className
      )}>
      <div
        className='flex-1 flex items-center justify-center opacity-25 hover:text-primaryPeach hover:opacity-100 cursor-pointer'
        onClick={decrease}>
        -
      </div>
      <div className='flex-1 flex items-center justify-center'>{count}</div>
      <div
        className='flex-1 flex items-center justify-center opacity-25 hover:text-primaryPeach hover:opacity-100 cursor-pointer'
        onClick={increase}>
        +
      </div>
    </div>
  )
}
