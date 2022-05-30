import React from 'react'
import { render } from '@testing-library/react-native'
import ProductCard from '.'

const PRODUCT_MOCK = {
  'id': 1,
  'title': 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  'price': 109.95,
  'description': 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  'category': 'men\'s clothing',
  'image': 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  'rating': { 'rate': 3.9, 'count': 120 }
}

describe('ProductCard', () => {
  it('should not render when not has a valid product', async () => {
    const productWithoutId = { ...PRODUCT_MOCK }
    
    const {queryByTestId } = render(<ProductCard product={productWithoutId} />)
    expect(queryByTestId('product-card')).toBeNull()
  })
  it('should render when has a valid product', async () => {
    const { queryByTestId, queryByText } = render(<ProductCard product={PRODUCT_MOCK} />)

    expect(queryByTestId('product-card')).not.toBeNull()
    expect(queryByText(PRODUCT_MOCK.title)).not.toBeNull()
  })
})