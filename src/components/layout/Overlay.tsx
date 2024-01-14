export function Overlay({ clickHandler }: { clickHandler: () => void }) {
  return (
    <div
      className='fixed inset-0 h-screen bg-black opacity-20 -z-10'
      onClick={clickHandler}
    />
  )
}
