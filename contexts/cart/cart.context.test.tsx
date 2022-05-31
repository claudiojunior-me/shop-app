import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import CartProvider, { useCart } from '.'

const PRODUCT_MOCK = {
  'id': 1,
  'title': 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  'price': 109.95,
  'description': 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  'category': 'men\'s clothing',
  'image': 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  'rating': { 'rate': 3.9, 'count': 120 }
}

describe('Cart Context', () => {
  it('should render empty cart on init', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider
    })

    expect(result.current.cart).toHaveLength(0)
    expect(result.current.isLoadingCart).toBeFalsy()
  })

  it('should add a item into cart and remove it', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper: CartProvider
    })

    expect(result.current.cart).toHaveLength(0)
    expect(result.current.isLoadingCart).toBeFalsy()

    result.current.addCartItem(PRODUCT_MOCK)
    await waitForNextUpdate()
    expect(result.current.cart).toHaveLength(1)

    result.current.excludeCartItem(PRODUCT_MOCK)
    await waitForNextUpdate()
    expect(result.current.cart).toHaveLength(0)
  })
})