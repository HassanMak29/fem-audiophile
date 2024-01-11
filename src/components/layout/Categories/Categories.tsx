import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <section className='flex max-md:flex-col max-md:gap-24 gap-[30px] w-full items-center'>
      <CategoryCard
        img="bg-[url('./assets/shared/desktop/image-category-thumbnail-headphones.png')]"
        title={'headphones'}
      />
      <CategoryCard
        img="bg-[url('./assets/shared/desktop/image-category-thumbnail-speakers.png')]"
        title={'speakers'}
      />
      <CategoryCard
        img="bg-[url('./assets/shared/desktop/image-category-thumbnail-earphones.png')]"
        title={'earphones'}
      />
    </section>
  )
}
