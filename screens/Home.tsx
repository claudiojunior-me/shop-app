import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import ProductCard from '../components/ProductCard'
import { fetchProductsList } from '../core/product/fetchProducts'
import { TProduct } from '../core/product/type'

function HomeScreen() {
  const [products, setProducts] = useState<TProduct[]>()

  const loadProducts = async () => {
    const productsResponse = await fetchProductsList()
    setProducts(productsResponse)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <ScrollView style={{ flex: 1}}>
      {
        products?.length && 
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </ScrollView>
  )
}

export default HomeScreen