import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';
import { useStoreState } from 'easy-peasy';

import { apiUrl } from '../../services';

import TabTitle from "../../components/tabTitle";
import SelectCategory from '../../components/selectCategory';


export default function RegisterSale() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('CARREGUEI DA API!');

        axios.get(`${apiUrl}/product/`).then(response => {
            setProducts(response.data.products);
        })
    }, []);
    console.log(products)


    return(
        <View style={{flex:1, alignItems: 'flex-start', margin: 30}}>
            <TabTitle title="EXECUTAR VENDA" />
            <SelectCategory />        
        </View>
    );
}