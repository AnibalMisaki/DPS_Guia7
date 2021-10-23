import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Perros from '../screens/Perros';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Perros" component={Perros} options={{title:'Perros'}}/> 
        </Stack.Navigator>
    );
}