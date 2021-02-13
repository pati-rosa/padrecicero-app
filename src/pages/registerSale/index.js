import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import axios from 'axios';
import { useStoreState, useStoreActions } from 'easy-peasy';

import TopTitle from '../../components/topTitle';

import { Container } from './styles';
import { apiUrl } from '../../services';

export default function RegisterSale() {
    const { setLastAddedSale } = useStoreActions((store) => store);
  const { lastAddedProduct } = useStoreState((store) => store);

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get(`${apiUrl}/product/`).then(response => {
      setProducts(response.data.products);
    })
  }, [lastAddedProduct]);

  const handleSaleRegister = (data) => {

    axios.post(`${apiUrl}/sale/`, { product: `${data}`, quantity: 1 })
    .then((response) => {
      Alert.alert(`Venda executada`);
      setLastAddedSale(response.data.sale._id);
    })
  }

  const element = (data) => (
    <TouchableOpacity onPress={() => handleSaleRegister(data)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>+</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Container>
      <TopTitle title="Executar vendas" />
      <ScrollView >
        <Table borderStyle={styles.border}>
          <Row data={['Produto', 'Descrição', 'Preço', 'Adicionar']} style={ styles.header} textStyle={styles.text} />
          {
            products.map((product) => [product.name, product.description, product.price, product._id]).map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                  ))
                }
              </TableWrapper>
            ))
          }
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
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2, alignItems: 'center', flex:1 },
  btnText: { textAlign: 'center', color: '#fff' }
});