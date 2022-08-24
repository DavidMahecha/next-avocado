export type CartItemType = TProduct & { quantity: number }

export type CartState = {
  [key: string]: CartItemType
}

export type CartAction = {
  type: 'add' | 'remove'
  item: TProduct
  quantity?: number
}

export default function cartReducers(
  state: CartState,
  { item, type, quantity: qtyToAdd = 1 }: CartAction
) {
  const existingCartItem = state[item.id]

  switch (type) {
    case 'add': {
      if (existingCartItem != undefined) {
        const quantity = existingCartItem.quantity + qtyToAdd
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      }
    }

    case 'remove': {
      if (existingCartItem == undefined) {
        return state
      }

      const quantity = existingCartItem.quantity - 1
      if (quantity > 0) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      const newCartItems = { ...state }
      delete newCartItems[item.id]
      return newCartItems
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
