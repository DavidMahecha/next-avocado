import { useContext } from 'react'
import { CartItemsContext, CartDispatchContext } from 'context/CartContext'
import type { CartItemType } from 'reducers/cart'

const getCartSubTotal = (sum: number, item: CartItemType) => {
  sum += item.price * item.quantity
  return sum
}

const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity

export const useCart = () => {
  const itemsById = useContext(CartItemsContext)
  const items = Object.values(itemsById)
  // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const count = items.reduce(getCartCount, 0)
  const subTotal = items.reduce(getCartSubTotal, 0)

  return {
    items,
    itemsById,
    count,
    subTotal,
  }
}

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext)

  const addToCart = (product: TProduct, quantity?: number) =>
    dispatch({
      type: 'add',
      item: product,
      quantity,
    })

  const removeFromCart = (product: TProduct) =>
    dispatch({
      type: 'remove',
      item: product,
    })

  return {
    addToCart,
    removeFromCart,
  }
}
