
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import store from './src/redux/store/store';
import Navigation from './src/navigation';

let persistor = persistStore(store)



export default function App() {
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

