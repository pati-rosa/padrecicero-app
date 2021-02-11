import React from 'react';
import { View } from 'react-native';
import { useStoreState } from 'easy-peasy';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  margin: 5px 7px 2px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 300px;

`
const Title = styled.Text`
  font-size: 28px;
  color:red

`

export default function selectEmployee() {
  const { name, courses } = useStoreState((store) => store);
  
  return (
      <View>
          <Input placeholder="Nome do funcionário"/>
          <Title>Current count is: { name } </Title>

      </View>
      
  )
}