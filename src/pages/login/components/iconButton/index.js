import React from 'react';
import { View, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 300px;
`

export default function IconButton() {

    return (
        <Container>
            <Button title="ENTRAR"/>
        </Container>
        
    )
  }