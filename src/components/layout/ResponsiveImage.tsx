import { TImage } from '../../lib/types'

interface ResponsiveImageProps {
  image: TImage
  alt: string
}

export default function ResponsiveImage({ image, alt }: ResponsiveImageProps) {
  return (
    <>
      <img
        src={image.mobile.replace('.', '')}
        alt={alt}
        className='absolute md:hidden inset-0 w-full h-full object-cover rounded-lg'
      />
      <img
        src={image.tablet.replace('.', '')}
        alt={alt}
        className='absolute hidden md:max-lg:block inset-0 w-full h-full object-cover rounded-lg'
      />
      <img
        src={image.desktop.replace('.', '')}
        alt={alt}
        className='absolute max-lg:hidden inset-0 w-full h-full object-cover rounded-lg'
      />
    </>
  )
}
