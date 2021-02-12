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

        axios.get(`${apiUrl}/sale/`).then(response => {
            setSales(response.data.sales);
        })
    }, []);

    return (
      <Container>
        <TopTitle title="Listar vendas" />
        <ScrollView >
            <Table borderStyle={styles.border}>
            <Row data={['Produto', 'Descrição', 'Preço', 'Quantidade']} style={styles.header} textStyle={styles.text}/>
            <Rows data={sales.map((sale) => [sale.product.name, sale.product.description, sale.product.price, sale.quantity])} textStyle={styles.text}/>
            </Table>
        </ScrollView>
            
      </Container>
    )
}


const styles = StyleSheet.create({
  border: { borderWidth: 2, borderColor: '#c8e1ff' },
  header: { height: 40, backgroundColor: '#f1f8ff'},
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#fff' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});