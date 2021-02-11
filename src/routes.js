import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import RegisterProduct from './pages/registerProduct';
import RegisterSale from './pages/registerSale';
import ListSale from './pages/listSales';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <AuthStack.Navigator>
                <AuthStack.Screen name="login" component={Login} />
                <AuthStack.Screen name="registerProduct" component={RegisterProduct} />
                <AuthStack.Screen name="registerSale" component={RegisterSale} />
                <AuthStack.Screen name="listSale" component={ListSale} />
            </AuthStack.Navigator>
        </View>
    );
}

// options={{ headerShown: false }}