import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 300px;
`

export default function IconButton(props) {

    return (
        <Container>
            <Button title={props.value}
                    onPress={props.onPress}
            />
        </Container>
        
    )
  }