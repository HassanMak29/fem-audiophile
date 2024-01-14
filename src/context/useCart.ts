import { useContext } from 'react'
import CartContext from './cartContext'

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('The context was used outside its provider')
  return context
}
