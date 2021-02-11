import React from 'react';
import { View } from 'react-native';
import { useStoreState } from 'easy-peasy';

import {Title } from './styles';

export default function StoreEmployee() {
    const { name, courses } = useStoreState((store) => store);
    
    return (
        <View>
            <Title>Funcionário: { name } </Title>
        </View>
        
    )
  }