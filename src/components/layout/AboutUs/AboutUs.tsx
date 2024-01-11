export default function AboutUs() {
  return (
    <section className='flex max-lg:flex-col items-center w-full gap-10 justify-between'>
      <div className='flex-1 max-lg:order-2 lg:max-w-[445px] max-lg:text-center flex flex-col items-center'>
        <h2 className='mb-8'>
          Bringing you the <span className='text-primaryPeach'>best</span> audio
          gear
        </h2>
        <p className='opacity-50 md:max-w-[75ch]'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className='w-full lg:max-w-[540px] shrink-0 min-h-[300px] lg:min-h-[588px] rounded-lg flex-1 bg-[url("./assets/shared/mobile/image-best-gear.jpg")] md:bg-[url("./assets/shared/tablet/image-best-gear.jpg")] lg:bg-[url("./assets/shared/desktop/image-best-gear.jpg")] bg-cover bg-center bg-no-repeat' />
    </section>
  )
}
