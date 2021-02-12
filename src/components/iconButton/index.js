import React from 'react';
import { Button } from 'react-native';

import { Container } from './styles';

export default function IconButton(props) {

    return (
        <Container>
            <Button title={props.value}
                    onPress={props.onPress}
                    color="#CC7A37"
            />
        </Container>
        
    )
  }