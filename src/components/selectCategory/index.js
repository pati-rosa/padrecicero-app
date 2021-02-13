import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { apiUrl } from '../../services';

export default function SelectCategory() {
    const { category } = useStoreState((store) => store);
    const { setCategory } = useStoreActions((store) => store);

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        axios.get(`${apiUrl}/category/`).then(response => {
            setCategories(response.data.categories);
        })
    }, []);

    return (
        <View>
            <Text> Selecionar Categoria</Text>
            <Picker
                selectedValue={category}
                style={{ width: 300, color: "#1A110F" }}
                onValueChange={(itemValue) =>
                    setCategory(itemValue)
                }>
                {categories.map((category) => <Picker.Item label={category.name} value={category} key={category._id} />)}
            </Picker>
        </View>
    );
};


