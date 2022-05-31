import { useNavigation } from '@react-navigation/native'
import { Button } from '@rneui/themed'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useCart } from '../../contexts/cart'

function CartHeaderIcon() {
  const { cart } = useCart()
  const navigation = useNavigation()

  return (
    <Button
      buttonStyle={{ width: 150 }}
      containerStyle={{ margin: 5 }}
      icon={<Icon name='cart' size={25} color="#999" />}
      color='success'
      onPress={() => navigation.navigate('Cart')}
      title={cart.length.toString()}
      titleStyle={{ marginHorizontal: 5 }}
      type='clear'
    />
  )
}

export default CartHeaderIcon