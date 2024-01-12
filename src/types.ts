export type TImage = {
  mobile: string
  tablet: string
  desktop: string
}

export type TProduct = {
  id: number
  name: string
  slug: string
  description: string
  category: string
  categoryImage: TImage
  price: number
  features: string
  image: TImage
  new: boolean
  gallery: {
    first: TImage
    second: TImage
    third: TImage
  }
  includes: {
    quantity: number
    item: string
  }[]
  others: {
    slug: string
    name: string
    image: TImage
  }[]
}

export type TData = TProduct[]
