import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import SelectEmployee from './components/selectEmployee/selectEmployee';

export default function login() {
    return(
        <View style={styles.container}>
            <SelectEmployee />
        </View>
    )
}
