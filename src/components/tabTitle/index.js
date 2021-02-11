import React from 'react';
import { View} from 'react-native';

import StoreEmployee from '../../components/storeEmployee';

import { StyledText, StyledView } from './styles';
export default function TabTitle(props) {
    return(
        <View>
            <StoreEmployee />
            <StyledView>
                <StyledText>{props.title}</StyledText>
            </StyledView>
        </View>
    );
}