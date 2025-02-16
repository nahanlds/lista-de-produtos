export interface Card {

  id: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  quantity: number
  name: string
  category: string
  price: number
}
