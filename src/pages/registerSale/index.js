import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useTable } from 'react-table'
import axios from 'axios';

import { apiUrl } from '../../services';

import TabTitle from "../../components/tabTitle";
import SelectCategory from '../../components/selectCategory';


export default function RegisterSale() {
    // const { header } = useStoreState((store) => store);
    // const { setHeader } = useStoreActions((store) => store);
    // const data = React.useMemo(
    //     () => [
    //       {
    //         col1: 'Hello',
    //         col2: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //       },
    //     ],
    //     []
    //   )
    
    //   const columns = React.useMemo(
    //     () => [
    //       {
    //         Header: 'Column 1',
    //         accessor: 'col1', // accessor is the "key" in the data
    //       },
    //       {
    //         Header: 'Column 2',
    //         accessor: 'col2',
    //       },
    //     ],
    //     []
    //   )
    //   const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    //   } = useTable({ columns, data })
    

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('CARREGUEI DA API!');

        axios.get(`${apiUrl}/product/`).then(response => {
            setProducts(response.data.products);
        })
    }, []);
    console.log(products)


    return(
        <View style={{flex:1, alignItems: 'flex-start', margin: 30}}>
            <TabTitle title="EXECUTAR VENDA" />
            {/* <View >

            </View>      */}
        </View>
    );
}