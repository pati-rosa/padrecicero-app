import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker, pickerSelectStyles } from '@react-native-picker/picker';
import axios from 'axios';

import { apiUrl } from '../../services';


export default function SelectCategory() {
    const [selectedCategory, setSelectedCategory] = useState();
    const [categories, setCategories] = useState([]);

    console.log('SELECTED CATEGORY: ', selectedCategory);

    useEffect(() => {
        console.log('CARREGUEI DA API!');

        axios.get(`${apiUrl}/category/`).then(response => {
            setCategories(response.data.categories);
        })
    }, []);


    return (
        <View>
            <Picker
                selectedValue={selectedCategory}
                style={{ width: 300, color: "#1A110F" }}
                onValueChange={(itemValue) =>
                    setSelectedCategory(itemValue)
                }>
                {categories.map((category) => <Picker.Item label={category.name} value={category} key={category._id} />)}
                {/* <Picker.Item label="Java" value="java" /> */}
            </Picker>
        </View>
    );
};


