import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegisterProduct from '../../pages/registerProduct';
import RegisterSale from '../../pages/registerSale';
import ListSale from '../../pages/listSales';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="RegisterProduct" component={RegisterProduct} />
        <Tab.Screen name="RegisterSale" component={RegisterSale} />
        <Tab.Screen name="ListSale" component={ListSale} />
      </Tab.Navigator>
  );
}