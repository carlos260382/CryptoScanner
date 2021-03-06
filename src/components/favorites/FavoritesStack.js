import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen';
import colors from '../../resourse/colors';

const Stack = createStackNavigator();

const FavoritesStack = () =>{
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: colors.blackpearl,
                shadowColor: colors.blackpearl
                },
            headerTintColor: colors.white 
        }}
        >
            <Stack.Screen 
            name= 'Favorites'
            component = {FavoritesScreen}     
            />
        </Stack.Navigator>
    );
}

export default FavoritesStack;