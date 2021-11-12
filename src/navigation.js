
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen/Home';


import { View, Text } from 'react-native'
import MainStack from './screens/MainStack';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  const [isLoggedIn, SetIsLoggedIn] = useState(true)
  const Title = () => {
    return (
      <View>
        <Text style={{ color: 'green', marginTop: 3, marginRight: 5 }}>Education has no money value</Text>
      </View>
    )

  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
      >

        <Stack.Screen name="Authentications" component={Home} options={{ headerShown: false, headerTitleStyle: { color: 'green' } }}
        />
        <Stack.Screen name="menu" component={MainStack} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>



  );
}
