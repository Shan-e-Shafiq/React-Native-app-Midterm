import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import GetStartedScreen from './Screens/GetStartedScreen';
import BookScreen from './Screens/BookScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='GetStartedScreen'
        screenOptions={{
          animation: 'slide_from_right',
          headerTransparent: true

        }}

      >
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookScreen" component={BookScreen} options={{
          title: 'My Books',
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}