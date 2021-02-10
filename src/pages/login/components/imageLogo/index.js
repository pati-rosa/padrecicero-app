import React from 'react';

import { StyledView, StyledImage } from './styles';

import logoPng from '../../../../../assets/santa-ceia.png';



export default function ImageLogo() {
    return(
        <StyledView>
            <StyledImage source={logoPng} resizeMode="contain" />
        </StyledView>
    );
}