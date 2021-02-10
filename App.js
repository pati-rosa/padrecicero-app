import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StoreProvider } from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/stores/store';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StoreProvider store={store} >
          <Routes />
        </StoreProvider>
      </View>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
