import React, { createContext, useContext, useEffect, useState } from 'react'
import { TProductCart } from '../../core/cart/type'
import { TProduct } from '../../core/product/type'
import { TCartProviderProps, TCartService } from './types'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const CartContext = createContext<TCartService>(undefined!)

function CartProvider({ children }: TCartProviderProps) {
  const [isLoadingCart, setLoadingCart] = useState<boolean>(false)
  const [cart, setCart] = useState<TProductCart[]>([])

  const findProductIntoCart = (productToFind: TProduct) => {
    return cart.findIndex(cartProduct => cartProduct.id === productToFind.id)
  }

  const addCartItem = (product: TProduct, quantity = 1) => {
    setLoadingCart(true)

    try {
      const productIndexInCart = findProductIntoCart(product)
      const updatedCart = [...cart]

      if (productIndexInCart > -1) {
        updatedCart[productIndexInCart].quantity++
      } else {
        updatedCart.push({...product, quantity})
      }
      setCart(updatedCart)
    } catch (err) {
      console.trace(err)
    } finally {

      setLoadingCart(false)
    }
  }

  const excludeCartItem = (product: TProduct) => {
    setLoadingCart(true)

    try {
      const productIndexInCart = findProductIntoCart(product)
      const updatedCart = [...cart]

      if (productIndexInCart === -1) {
        return
      }

      updatedCart.splice(productIndexInCart, 1)
      setCart(updatedCart)
    } catch (err) {
      console.trace(err)
    } finally {
      setLoadingCart(false)
    }
  }

  return (
    <CartContext.Provider value={{
      isLoadingCart,
      cart,
      addCartItem,
      excludeCartItem
    }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export default CartProvider
export {
  useCart
}