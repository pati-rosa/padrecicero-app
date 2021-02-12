import React from 'react';
import { Container } from './styles';

import ImageLogo from './components/imageLogo';
import IconButtonLogin from './components/iconButton';
import RestaurantTitle from './components/restaurantTitle';

export default function login({ navigation }) {
    return(
        <Container>
            <RestaurantTitle/>
            <ImageLogo />
            <IconButtonLogin value="Entrar" onPress={ () => navigation.navigate('TabNavigator')}/>
        </Container>
    )
}
