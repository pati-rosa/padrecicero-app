import React from 'react';

import { Logo, Container} from './styles';

import logoPng from '../../../../../assets/santa-ceia.png';

export default function ImageLogo() {
    return(
        <Container>
            <Logo source={logoPng} resizeMode="contain" />
        </Container>
    );
}