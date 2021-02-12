import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import axios from 'axios';
import { useStoreState } from 'easy-peasy';

import TopTitle from '../../components/topTitle';

import { apiUrl } from '../../services';

export default function RegisterSale() {
  const { lastAddedProduct } = useStoreState((store) => store);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('CARREGUEI DA API!');

    axios.get(`${apiUrl}/product/`).then(response => {
      setProducts(response.data.products);
    })
  }, [lastAddedProduct]);

  const handleSaleRegister = (data) => {

    axios.post(`${apiUrl}/sale/`, { product: `${data}`, quantity: 1 }).then(() => Alert.alert(`Produto adicionado`))
  }

  const element = (data) => (
    <TouchableOpacity onPress={() => handleSaleRegister(data)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TopTitle title="Executar vendas" />
      <ScrollView style={styles.dataWrapper}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={['Produto', 'descrição', 'preço', 'Adicionar']} style={styles.head} textStyle={styles.text} />
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#fff' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});