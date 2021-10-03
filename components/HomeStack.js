import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../components/Home'
import Restaurant from '../components/Restaurant'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Restaurant" component={Restaurant} />
        </Stack.Navigator>
    );
};

export default HomeStack;