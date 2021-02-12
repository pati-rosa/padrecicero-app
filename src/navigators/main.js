import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import TabNavigator from './tab';

const MainStack = createStackNavigator();

export default function MainRoutes() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
            <MainStack.Screen name="Sistema de gerenciamento" component={TabNavigator} />
        </MainStack.Navigator>
    );
}

// options={{ headerShown: false }}