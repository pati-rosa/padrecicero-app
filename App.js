import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StoreProvider } from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/stores/store';
import MainNavigator from './src/navigators/main';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StoreProvider store={store} >
          <View style={{ width: '100%', height: '100%' }}>
            <MainNavigator />
          </View>
        </StoreProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
