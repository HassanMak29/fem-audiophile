import { PropsWithChildren, useState } from 'react'
import CartContext from './cartContext'
import { TCartItem, TProduct } from '../lib/types'
import useLocalStorage from '../hooks/useLocalStorage'

export default function ContextProvider({ children }: PropsWithChildren) {
  const [storedCart, setStoredCart, removeStoredCart] = useLocalStorage<
    TCartItem[]
  >('audiophile-cart', [])
  const [cart, setCart] = useState<TCartItem[]>(storedCart)

  const addProduct = (product: TProduct, quantity: number = 1) => {
    console.log('clicked addProduct')

    setCart((prevCartItems) => {
      console.log('addProduct prevCartItems: ', prevCartItems)
      if (prevCartItems.some((crtItem) => crtItem.product.id === product.id)) {
        const updatedCart = prevCartItems.map((crtItem) =>
          crtItem.product.id === product.id
            ? {
                product: crtItem.product,
                quantity: crtItem.quantity + 1,
              }
            : crtItem
        )
        console.log('addProduct updatedCart', updatedCart)
        setStoredCart(updatedCart)
        return updatedCart
      } else {
        const updatedCart = [...prevCartItems, { product, quantity: quantity }]

        setStoredCart(updatedCart)
        return updatedCart
      }
    })
  }

  const removeProduct = (product: TProduct) => {
    console.log('clicked removeProduct')

    setCart((prevCartItems) => {
      console.log('removeProduct prevCartItems: ', prevCartItems)

      const cartItem = prevCartItems.find((p) => p.product.id === product.id)!
      if (cartItem.quantity > 1) {
        const updatedCart = prevCartItems.map((crtItem) =>
          crtItem.product.id === product.id
            ? { product: crtItem.product, quantity: crtItem.quantity-- }
            : crtItem
        )
        console.log('removeProduct updatedCart: ', updatedCart)
        setStoredCart(updatedCart)
        return updatedCart
      } else {
        const updatedCart = prevCartItems.filter(
          (crtItem) => crtItem.product.id !== product.id
        )

        setStoredCart(updatedCart)
        return updatedCart
      }
    })
  }

  const removeAll = () => {
    removeStoredCart()
    setCart([])
  }

  const value = { cart, addProduct, removeProduct, removeAll }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
