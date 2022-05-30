import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { TProduct } from '../../core/product/type'
import NumberFormat from 'react-number-format'
import { Button, Card, Text } from '@rneui/themed'
import { useCart } from '../../contexts/cart'

type TProductCardProps = {
  product: TProduct
}

function ProductCard({ product }: TProductCardProps) {
  const { addCartItem } = useCart()
  const [isLoading, setLoading] = useState<boolean>(false)

  if (!product.id) {
    return null
  }

  const addProductToCart = async () => {
    setLoading(true)
    await addCartItem(product)
    setLoading(false)
  }

  return (
    <Card data-testid='product-card'>
      <Card.Title data-testid='product-card-title'>{product.title}</Card.Title>
      <Card.Divider />
      <View style={{ position: 'relative', alignItems: 'center' }}>
        <Image
          style={{width: '100%', height: 100}}
          resizeMode='contain'
          source={{
            uri: product.image
          }}
        />
        <NumberFormat
          value={product.price}
          displayType='text'
          prefix='R$'
          renderText={(value) => <Text>{value}</Text>}
        />

        <Button
          onPress={addProductToCart}
          title='Add'
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
          loading={isLoading}
        />
      </View>
    </Card>
  )
}

export default ProductCard