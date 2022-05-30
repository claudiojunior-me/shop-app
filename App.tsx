import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/Home'
import { createTheme, ThemeProvider } from '@rneui/themed'
import CartProvider from './contexts/cart'

const theme = createTheme()

function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Stack.Navigator>
            <Stack.Screen name='Shop App' component={HomeScreen} />
          </Stack.Navigator>
        </CartProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App