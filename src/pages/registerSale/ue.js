import React, { useState, useEffect } from 'react';
import { View , StyleSheet} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';

import { apiUrl } from '../../services';

import TabTitle from "../../components/tabTitle";
import SelectCategory from '../../components/selectCategory';


export default function RegisterSale() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('CARREGUEI DA API!');

        axios.get(`${apiUrl}/product/`).then(response => {
            setProducts(response.data.products);
        })
    }, []);
    console.log(products.map((product) => [product.name, product.description]))


    return(
        <View style={{flex:1, alignItems: 'flex-start', margin: 30}}>
            <TabTitle title="EXECUTAR VENDA" />
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row 
                    data={['name','descrição']} 
                    style={styles.head} 
                    textStyle={styles.text}/>
                    <Rows 
                    data={products.map((product) => [product.name, product.description])} 
                    textStyle={styles.text} />
                </Table>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
  