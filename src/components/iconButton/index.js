import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const ButtonSection = styled.View`
    width: 300px;
    margin: 20px;

`

export default function IconButton(props) {

    return (
        <ButtonSection>
            <Button title={props.value}
                    onPress={props.onPress}
                    color="#CC7A37"
            />
        </ButtonSection>
        
    )
  }