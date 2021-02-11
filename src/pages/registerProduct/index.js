import React from 'react';
import { View } from 'react-native';

import TabTitle from '../../components/tabTitle';
import SelectCategory from '../../components/selectCategory';

export default function RegisterProduct() {
    return(
        <View>
            <TabTitle title="CADASTRAR PRODUTO" />
            <SelectCategory />
        </View>
    );
}