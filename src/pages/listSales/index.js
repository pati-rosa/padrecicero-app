import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

import { apiUrl } from '../../services';
import TabTitle from "../../components/tabTitle";

export default function ListSale() {
    const handlePress = () => {
        try {
            axios.get(`${apiUrl}/sale/`)
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
