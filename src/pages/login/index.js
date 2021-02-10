import React from 'react';

import { StyledView } from './styles';

import ImageLogo from './components/imageLogo'
import SelectEmployee from './components/selectEmployee';

export default function login() {
    return(
        <StyledView>
            <ImageLogo />
            <SelectEmployee />
        </StyledView>
    )
}
