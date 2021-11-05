
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import store from './src/redux/store/store';
import Navigation from './src/navigation';
import Application from './src/screens/Applications/Application';

import SplashScreen from 'react-native-splash-screen'
let persistor = persistStore(store)



export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>

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

