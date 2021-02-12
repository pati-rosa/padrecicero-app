import React, {useState} from 'react';
import { TextInput,Text, Alert } from 'react-native';
import axios from 'axios';
import { useStoreState } from 'easy-peasy';

import { apiUrl } from '../../services';

import TabTitle from '../../components/tabTitle';
import SelectCategory from '../../components/selectCategory';
import IconButton from '../../components/iconButton';
import { ContainerInput, Container } from './styles';

export default function RegisterProduct() {
    const { category } = useStoreState((store) => store);

    console.log('REGISTER PRODUCT', category?._id);

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    function handlePress(){
        axios.post(`${apiUrl}/product/`, { category: `${category._id}`, name:`${product}`, description:`${description}`, price: `${price}` })
        .then((request,response) => {Alert.alert(`Produto cadastrado`);}, 
            (error) => { if(error.response.data.error == 'Register product failed')
                            Alert.alert(`Produto inválido`)
                        if(error.response.data.error == 'Product already exists')
                            Alert.alert(`Produto já cadastrado no sistema`)
                        console.log(error.response.data.error)
                       } 
        )
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
        
        <Container>
            <TabTitle title="Cadastrar Produto" />
            <SelectCategory />
            <Text>Nome do produto</Text>   
            <ContainerInput > 
                <TextInput  
                placeholder="Escolher nome do produto"
                onChangeText={handleProduct}
                defaultValue={product}
                placeholderTextColor="#A9A9A9" 
                />
            </ContainerInput>
            <Text>Preço</Text>   
            <ContainerInput > 
                <TextInput  
                placeholder="Escolher nome do produto"
                onChangeText={handlePrice}
                defaultValue={price}
                />
            </ContainerInput>
            <Text>Descrição</Text>   
            <ContainerInput > 
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
          
        </Container>
    );
    
}
