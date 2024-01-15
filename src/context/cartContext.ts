import { createContext } from 'react'
import { TCartItem, TProduct } from '../lib/types'

interface IContext {
  cart: TCartItem[]
  addProduct: (v: TProduct, q?: number) => void
  removeProduct: (v: TProduct) => void
  removeAll: () => void
}

export default createContext<IContext>({
  cart: [],
  addProduct: (_v: TProduct, _q: number = 1) => {},
  removeProduct: (_v: TProduct) => {},
  removeAll: () => {},
})
