import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import productStore from './src/stores/store';
import Main from './src/components/main';
import { StoreProvider } from 'easy-peasy';
import store from './src/stores/store';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StoreProvider store={store} >
          <Main />
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
