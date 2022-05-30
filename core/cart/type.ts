import { TProduct } from '../product/type'

export type TProductCart = TProduct & {
  quantity: number
}