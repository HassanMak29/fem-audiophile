import { PropsWithChildren, useState } from 'react'
import CartContext from './cartContext'
import { TCartItem, TProduct } from '../lib/types'
import useLocalStorage from '../hooks/useLocalStorage'

export default function ContextProvider({ children }: PropsWithChildren) {
  const [storedCart, setStoredCart] = useLocalStorage<TCartItem[]>(
    'audiophile-cart',
    []
  )
  const [cart, setCart] = useState<TCartItem[]>(storedCart)

  const addProduct = (product: TProduct, quantity: number = 1) => {
    setCart((prevCartItems) => {
      if (prevCartItems.some((crtItem) => crtItem.product.id === product.id)) {
        const updatedCart = prevCartItems.map((crtItem) =>
          crtItem.product.id === product.id
            ? {
                product: crtItem.product,
                quantity: crtItem.quantity++,
              }
            : crtItem
        )

        setStoredCart(updatedCart)
        return updatedCart
      } else {
        const updatedCart = [...prevCartItems, { product, quantity: quantity }]

        setStoredCart(updatedCart)
        return updatedCart
      }
    })
  }

  const removeProduct = (product: TProduct) =>
    setCart((prevCartItems) => {
      const cartItem = prevCartItems.find((p) => p.product.id === product.id)!
      if (cartItem.quantity > 1) {
        const updatedCart = prevCartItems.map((crtItem) =>
          crtItem.product.id === product.id
            ? { product: crtItem.product, quantity: crtItem.quantity-- }
            : crtItem
        )

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

  const removeAll = () => setCart([])

  const value = { cart, addProduct, removeProduct, removeAll }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
