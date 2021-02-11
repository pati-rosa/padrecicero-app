import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

import TabTitle from "../../components/tabTitle";
import { StyledView } from './styles';
// const api = axios.create({
//     baseURL: `http://localhost:3000/`
// })

export default function ListSale() {
    const handlePress = () => {
        try {
            axios.get('http://192.168.0.109:3000/sale/')
                .then(response => {
                    console.log(response.data)
                })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'red', padding: 5 }}>
            <TabTitle title="LISTAR VENDAS" />
            <Button title="LIST"
                onPress={handlePress}
            />
        </View>
    );
}
// api.get('sale/')
// .then(res => {
//     console.log(res.data)
// })
// .catch(error => {
//     console.log(error)
// })