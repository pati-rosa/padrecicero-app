import React from 'react';
import { View } from 'react-native';
import { StoreProvider } from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/stores/store';
import MainNavigator from './src/navigators/main';

import { Container } from './styles';

export default function App() {
  
  return (
    <NavigationContainer>
      <View >
        <StoreProvider store={store} >
          <Container>
            <MainNavigator />
          </Container>
        </StoreProvider>
      </View>
    </NavigationContainer>
  );
}

