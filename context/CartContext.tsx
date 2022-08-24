import { createContext, Dispatch, useReducer } from 'react'
import cartReducers from 'reducers/cart'
import type { PropsWithChildren } from 'react'
import type { CartState, CartAction } from 'reducers/cart'

const defaultState = {} as CartState

export const CartItemsContext = createContext(defaultState)
export const CartDispatchContext = createContext(
  (() => {}) as Dispatch<CartAction>
)

const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cartReducers, defaultState)

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  )
}

export default CartProvider
