import React from 'react';
import { Text , View, TextInput} from 'react-native';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components/native';

// const StyledTextInput = styled.View`
//   background-color:blue;
// `


export default function selectEmployee() {
  const { name, courses } = useStoreState((store) => store);
  
  return (
      <View>
          <TextInput placeholder="Endereço de email"/>
          <Text>Current count is: { name } </Text>
          <Text>alo</Text>
      </View>
      
  )
}