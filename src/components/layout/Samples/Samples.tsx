import { Link } from 'react-router-dom'

export default function Samples() {
  return (
    <section className='flex flex-col gap-8 w-full'>
      <div className='flex max-lg:flex-col h-[720px] rounded-lg overflow-hidden col-span-2 row-span-2 bg-primaryPeach relative lg:h-[560px] max-lg:items-center'>
        <div className='absolute max-md:-top-[100px] md:bottom-20 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:-top-[36px] lg:-left-[149px] max-w-[944px] aspect-square bg-[url("./assets/home/desktop/pattern-circles.svg")] bg-cover h-[558px] w-[558px] md:w-[944px] md:h-[944px]' />
        <div className='flex-[40%] lg:flex-[60%] shrink-0 z-10 relative'>
          <div className="absolute max-lg:top-[20%] left-1/2 -translate-x-1/2 lg:-bottom-3 bg-[url('./assets/home/mobile/image-speaker-zx9.png')] md:bg-[url('./assets/home/tablet/image-speaker-zx9.png')] lg:bg-[url('./assets/home/desktop/image-speaker-zx9.png')] bg-contain lg:bg-cover bg-no-repeat bg-center lg:w-[410px] h-[207px] md:h-[237px] lg:h-[493px] w-[172px] md:w-[197px]" />
        </div>
        <div className='flex-[60%] lg:flex-[40%] z-10 py-6 lg:py-[133px] lg:pr-[95px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center -mb-16 md:max-lg:w-[350px] w-[280px]'>
          <h2 className='h1 lg:w-[1ch] mb-6 text-white'>ZX9 SPEAKER</h2>
          <p className='text-white mb-10 md:max-lg:max-w-[350px] opacity-75'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to='/products/speakers/6'>
            <button className='btn white'>see product</button>
          </Link>
        </div>
      </div>
      <div className="rounded-lg col-span-2 h-[320px] bg-[url('./assets/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('./assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('./assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-no-repeat bg-center">
        <div className='py-[101px] px-6 md:px-[64px] lg:px-[95px]'>
          <h2 className='h4 mb-8'>ZX7 SPEAKER</h2>
          <Link to='/products/speakers/5'>
            <button className='btn white'>see product</button>
          </Link>
        </div>
      </div>
      <div className='flex max-md:flex-col md:gap-[11px] gap-6 lg:gap-8 w-full justify-between'>
        <div className="md:flex-1 rounded-lg bg-[url('./assets/home/mobile/image-earphones-yx1.jpg')] md:bg-[url('./assets/home/tablet/image-earphones-yx1.jpg')] lg:bg-[url('./assets/home/desktop/image-earphones-yx1.jpg')] bg-cover bg-no-repeat bg-center max-md:min-h-[200px]" />
        <div className='md:flex-1 h-[200px] md:h-[320px] py-[41px] md:py-[101px] px-6 md:px-[41px] md:max-w-[50%] lg:px-[95px] rounded-lg bg-primaryGray'>
          <h2 className='h4 mb-8'>YX1 EARPHONES</h2>
          <Link to='/products/earphones/1'>
            <button className='btn white'>see product</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
