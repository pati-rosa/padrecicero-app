import React from 'react';
import { Button } from 'react-native';
import { Container } from './styles';

import ImageLogo from './components/imageLogo'
import SelectEmployee from './components/selectEmployee';
import IconButton from './components/iconButton'

export default function login() {
    return(
        <Container>
            <ImageLogo />
            <SelectEmployee />
            <IconButton value="Entrar" />
        </Container>
    )
}
