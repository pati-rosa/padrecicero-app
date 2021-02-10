import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <AuthStack.Navigator>
                <AuthStack.Screen name="login" component={Login} options={{ headerShown: false }} />
            </AuthStack.Navigator>
        </View>
    );
}