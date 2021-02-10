import CounterStore from '../stores/counter';
import React from 'react';
import { Button, Text , View} from 'react-native';

export default function Main() {
  // Access the store's state via the hook
  //                              👇
  const count = CounterStore.useStoreState((state) => state.count);

  const increment = CounterStore.useStoreActions(
    (actions) => actions.increment,
  );

  const handlePress = () => {
      console.log('Clicked');
    //   increment();
  }

  return (
      <View>
          <Text>Current count is: {count}</Text>
          <Button onPress={increment} title="mais"/>
      </View>
  )
}