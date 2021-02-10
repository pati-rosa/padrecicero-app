import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import productStore from './src/stores/store';
import CounterStore from './src/stores/counter';
import Main from './src/components/main';
import { StoreProvider } from 'easy-peasy';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterStore.Provider>
        <Main />
      </CounterStore.Provider>
    </View>
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
