import React from 'react';
import { View } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';
import { useStoreState } from 'easy-peasy';

import { apiUrl } from '../../services';

import TabTitle from "../../components/tabTitle";
import SelectCategory from '../../components/selectCategory';


export default function RegisterSale() {
    const { category } = useStoreState((store) => store);

    return(
        <View style={{flex:1, alignItems: 'flex-start', margin: 30}}>
            <TabTitle title="EXECUTAR VENDA" />
            <SelectCategory />
            
        </View>
    );
}