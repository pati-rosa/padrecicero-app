import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import TabNavigator from './components/tabNavigator';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <AuthStack.Navigator>
                <AuthStack.Screen name="login" component={Login} />
                <AuthStack.Screen name="tabNavigator" component={TabNavigator} />
            </AuthStack.Navigator>
        </View>
    );
}

// options={{ headerShown: false }}