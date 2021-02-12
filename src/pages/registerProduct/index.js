import React, {useState} from 'react';
import { View, TextInput,Text, Button} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

import { apiUrl } from '../../services';
import TabTitle from '../../components/tabTitle';
import SelectCategory from '../../components/selectCategory';
import { useStoreState } from 'easy-peasy';


const ButtonSection = styled.View`
    width: 300px;
    margin: 20px;

` 

export default function RegisterProduct() {
    const { category } = useStoreState((store) => store);

    console.log('REGISTER PRODUCT', category.name);

    const [text, setText] = useState('');
    console.log(text);

    function handlePress(){
        try{
            axios.post(`${apiUrl}/product/`, { category: `${SelectCategory.category}`})

        }catch{

        }
    }

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
                onChangeText={text => setText(text)}
                defaultValue={text}

                />
            </View>
            <ButtonSection>
                <Button 
                title="Cadastrar"
                onPress={handlePress}
                color="#CC7A37"/>
            </ButtonSection>
            
        </View>
    );
    
}