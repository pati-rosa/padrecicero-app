import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';

import { apiUrl } from '../../services';

export default function RegisterSale() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('CARREGUEI DA API!');

        axios.get(`${apiUrl}/product/`).then(response => {
            setProducts(response.data.products);
        })
    }, []);
    console.log(products.map((product) => [product.name, product.description]))

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={['Produto', 'descrição', 'preço', 'Adicionar']} style={styles.head} textStyle={styles.text}/>
          <Rows data={products.map((product) => [product.name, product.description, product.price, 'add'])} textStyle={styles.text}/>
        </Table>
      </View>
    )
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});