
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Navigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen'



export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (

    <Navigation />


  );
}

{/** */ }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

