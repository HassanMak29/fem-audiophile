// import { useState } from 'react'

interface CountInputProps {
  count: number
  increase: () => void
  decrease: () => void
}

export default function CountInput({
  count = 1,
  increase,
  decrease,
}: CountInputProps) {
  //   const [count, setCount] = useState(1)

  //   const increase = () => setCount((prev) => prev + 1)
  //   const decrease = () =>
  //     setCount((prev) => {
  //       if (prev > 1) return prev - 1
  //       return 1
  //     })

  return (
    <div className='flex bg-primaryGray'>
      <div
        className='w-10 px-4 py-2.5 opacity-25 hover:text-primaryPeach hover:opacity-100 cursor-pointer'
        onClick={decrease}>
        -
      </div>
      <div className='w-10 px-4 py-2.5'>{count}</div>
      <div
        className='w-10 px-4 py-2.5 opacity-25 hover:text-primaryPeach hover:opacity-100 cursor-pointer'
        onClick={increase}>
        +
      </div>
    </div>
  )
}
