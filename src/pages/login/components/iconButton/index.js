import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 300px;

`

export default function IconButtonLogin(props) {

    return (
        <Container>
            <Button title={props.value}
                    onPress={props.onPress}
                    color="#CC7A37"
                    
            />
        </Container>
        
    )
  }