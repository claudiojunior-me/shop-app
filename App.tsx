import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/Home'
import { createTheme, ThemeProvider } from '@rneui/themed'
import CartProvider from './contexts/cart'
import CartHeaderIcon from './components/CartHeaderIcon'
import CartScreen from './screens/Cart'

const theme = createTheme()

function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerRight: CartHeaderIcon,
                title: 'Shop App'
              }}
            />
            <Stack.Screen
              name='Cart'
              component={CartScreen}
              options={{
                title: 'My Cart'
              }}
            />
          </Stack.Navigator>
        </CartProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App