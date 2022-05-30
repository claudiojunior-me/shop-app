import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/Home'
import { createTheme, ThemeProvider } from '@rneui/themed'

const theme = createTheme()

function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name='Shop App' component={HomeScreen} />
        </Stack.Navigator>
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