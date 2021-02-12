import React from 'react';
import { View, TextInput,Text, StyleSheet } from 'react-native';

import TabTitle from '../../components/tabTitle';
import SelectCategory from '../../components/selectCategory';

export default function RegisterProduct() {
    return(
        <View>
                <TabTitle title="CADASTRAR PRODUTO" />
            <View style = {{ backgroundColor: 'red', padding: 20, margin:20}}>
                <SelectCategory />
            </View>
            <View style = {{ backgroundColor: 'red', padding: 20, margin:20}}> 
                <Text>Selecionar nome do produto</Text>   
                <TextInput  
                placeholder="Escolher nome do produto"
                placeholderTextColor="#A9A9A9" 
                />
            </View>
        </View>
    );
}