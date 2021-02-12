import React, { useState, useEffect  } from 'react';
import { StyleSheet, View, ScrollView  } from 'react-native';
import axios from 'axios';
import { Table, Row, Rows } from 'react-native-table-component';

import TopTitle from '../../components/topTitle';

import { apiUrl } from '../../services';

import { Container } from './styles';

export default function ListSale() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        console.log('CARREGUEI DA API!');

        axios.get(`${apiUrl}/sale/`).then(response => {
            setSales(response.data.sales);
        })
    }, []);
    console.log(sales.map((sale) => [sale.product.name, sale.product.description, sale.product.price, sale.quantity]))

    return (
      <Container>
        <TopTitle title="Listar vendas" />
        <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={['Produto', 'Descrição', 'Preço', 'Quantidade']} style={styles.head} textStyle={styles.text}/>
            <Rows data={sales.map((sale) => [sale.product.name, sale.product.description, sale.product.price, sale.quantity])} textStyle={styles.text}/>
            </Table>
        </ScrollView>
            
      </Container>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
