import { ReactNode } from 'react'
import { TProductCart } from '../../core/cart/type'
import { TProduct } from '../../core/product/type'

export type TCartProviderProps = {
  children: ReactNode
}

export type TCartService = {
  cart: TProductCart[],
  isLoadingCart: boolean,
  addCartItem: (product: TProduct, quantity?: number) => void,
  excludeCartItem: (product: TProduct) => void,
}