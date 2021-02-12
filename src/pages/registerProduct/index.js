import React, { useState } from 'react';
import { TextInput, Text, Alert } from 'react-native';
import axios from 'axios';
import { useStoreActions, useStoreState } from 'easy-peasy';

import TopTitle from '../../components/topTitle';
import SelectCategory from '../../components/selectCategory';
import IconButton from '../../components/iconButton';
import { ContainerInput, Container } from './styles';

import { apiUrl } from '../../services';

export default function RegisterProduct() {
    const { category } = useStoreState((store) => store);
    const { setLastAddedProduct } = useStoreActions((store) => store);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    function handleNameChange(name) {
        setName(name)
    }

    function handlePriceChange(price) {
        setPrice(price)
    }

    function handleDescriptionChange(description) {
        setDescription(description)
    }

    function handlePress() {
        axios.post(`${apiUrl}/product/`, { category: `${category._id}`, name: `${name}`, description: `${description}`, price: `${price}` })
            .then((response) => {
                setLastAddedProduct(response.data.product);
                Alert.alert(`Produto cadastrado`);
            },
                (error) => {
                    if (error.response.data.error == 'Register product failed') {
                        Alert.alert(`Produto inválido`)
                    } else if (error.response.data.error == 'Product already exists') {
                        Alert.alert(`Produto já cadastrado no sistema`)
                    }
                }
            )
    }

    return (

        <Container>
            <TopTitle title="Cadastrar Produto" />
            <SelectCategory />
            <Text>Nome do produto</Text>
            <ContainerInput >
                <TextInput
                    placeholder="Escolher nome do produto"
                    onChangeText={handleNameChange}
                    defaultValue={name}
                    placeholderTextColor="#A9A9A9"
                />
            </ContainerInput>
            <Text>Preço</Text>
            <ContainerInput >
                <TextInput
                    placeholder="Escolher preço do produto"
                    onChangeText={handlePriceChange}
                    defaultValue={price}
                />
            </ContainerInput>
            <Text>Descrição</Text>
            <ContainerInput >
                <TextInput
                    placeholder="Escolher descrição do produto"
                    onChangeText={handleDescriptionChange}
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
