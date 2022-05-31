import { Avatar, Button, ListItem, Text } from '@rneui/themed'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { useCart } from '../contexts/cart'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TProductCart } from '../core/cart/type'

function CartScreen() {
  const { cart, excludeCartItem } = useCart()
  
  const renderProductItem = (productCartItem: TProductCart) => {
    return (
      <ListItem
        key={productCartItem.id}
        pad={20}
        topDivider
      >
        <Avatar
          source={{
            uri: productCartItem.image
          }}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text>{productCartItem.title}</Text>
          </ListItem.Title>
          <View style={{ width: '100%', flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>Qtd: {productCartItem.quantity}</Text>
            <Button
              buttonStyle={{ width: 100 }}
              containerStyle={{ margin: 2 }}
              icon={<Icon name='delete' size={25} color="#FFF" />}
              color='error'
              onPress={() => excludeCartItem(productCartItem)}
              title='Remove'
              titleStyle={{ marginHorizontal: 2 }}
              type='solid'
            />
          </View>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text h1>My Cart</Text>
      {cart.map(renderProductItem)}
    </ScrollView>
  )
}

export default CartScreen