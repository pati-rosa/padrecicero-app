import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

import TabTitle from "../../components/tabTitle";

const api = axios.create({
    baseURL: `http://localhost:3000/sale/`
})

export default function ListSale() {
    const handlePress = () => {
        api.get('/sales/')
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return(
        <View>
            <TabTitle title="LISTAR VENDAS" />
            <Button title="LIST"
                    onPress={handlePress}
            />
        </View>
    );
}