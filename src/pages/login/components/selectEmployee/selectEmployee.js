import React from 'react';
import { Text , View} from 'react-native';
import { useStoreState } from 'easy-peasy';

export default function selectEmployee() {
  const { name, courses } = useStoreState((store) => store);
  
  return (
      <View>
          <Text>Current count is: { name } </Text>
          <Text>alo</Text>
      </View>
      
  )
}