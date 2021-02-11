import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import RegisterProduct from '../pages/registerProduct';
import RegisterSale from '../pages/registerSale';
import ListSale from '../pages/listSales';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator >
        <Tab.Screen name="Cadastrar Produto" component={RegisterProduct} 
        options={{
          tabBarLabel: 'Cadastrar Produto',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Executar Venda" component={RegisterSale} 
        options={{
          tabBarLabel: 'Executar Venda',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Listar Vendas" component={ListSale} 
        options={{
          tabBarLabel: 'Listar Vendas',
          tabBarIcon: ({ color, size }) => (
          <Feather name="list" color={color} size={size} /> 
          ),
        }}/>
      </Tab.Navigator>
  );
}