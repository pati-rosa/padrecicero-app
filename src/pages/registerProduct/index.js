import React, {useState} from 'react';
import { View, TextInput,Text } from 'react-native';
import axios from 'axios';
import { useStoreState } from 'easy-peasy';

import { apiUrl } from '../../services';

import TabTitle from '../../components/tabTitle';
import SelectCategory from '../../components/selectCategory';
import IconButton from '../../components/iconButton';
import { ContainerInput } from './styles';

export default function RegisterProduct() {
    const { category } = useStoreState((store) => store);

    console.log('REGISTER PRODUCT', category?._id);

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    function handlePress(){
        try{
            axios.post(`${apiUrl}/product/`, { category: `${category._id}`, name:`${product}`, description:`${description}`, price: `${price}` })

        }catch{

        }
    }
    function handleProduct(product) {
        setProduct(product)
    }
    function handlePrice(price) {
        setPrice(price)
    }
    function handleDescription(description) {
        setDescription(description)
    }

    return(
        
        <View style={{flex:1, alignItems: 'flex-start', margin: 30}}>
            <TabTitle title="CADASTRAR PRODUTO" />
            <ContainerInput>
                <SelectCategory />
            </ContainerInput>
            <ContainerInput > 
                <Text>Nome do produto</Text>   
                <TextInput  
                placeholder="Escolher nome do produto"
                onChangeText={handleProduct}
                defaultValue={product}
                placeholderTextColor="#A9A9A9" 
                />
            </ContainerInput>
            <ContainerInput > 
                <Text>Preço</Text>   
                <TextInput  
                placeholder="Escolher nome do produto"
                onChangeText={handlePrice}
                defaultValue={price}
                />
            </ContainerInput>
            <ContainerInput > 
                <Text>Descrição</Text>   
                <TextInput  
                placeholder="Escolher descrição do produto"
                onChangeText={handleDescription}
                defaultValue={description}
                />
            </ContainerInput>
            <IconButton 
            value="Cadastrar" 
            onPress={handlePress}
            
            />
          
        </View>
    );
    
}