import React from 'react';
import { Container } from './styles';

import ImageLogo from './components/imageLogo';
import SelectEmployee from './components/selectEmployee';
import IconButton from './components/iconButton';
import RestaurantTitle from '../../components/restaurantTitle';

export default function login({ navigation }) {
    return(
        <Container>
            <RestaurantTitle/>
            <ImageLogo />
            <SelectEmployee />
            <IconButton value="Entrar" onPress={ () => navigation.navigate('TabNavigator')}/>
        </Container>
    )
}
