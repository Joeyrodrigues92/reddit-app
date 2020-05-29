//Until now, we used Expo to set up our app navigation. Let's set navigation up from scratch with this AppNavigator.js:
//Responsibilities:
// - displaying all our screens
// - create navgation Context

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';

const Stack = createStackNavigator();

// NavigationContainer hosts app navigation contect
// Stack.Navigator host a collection of screens

export default function AppNavigator() {
    return (
        <NavigationContainer> 
            <Stack.Navigator> 
                <Stack.Screen name="Posts" component={Posts} />
                <Stack.Screen name="Detail" component={PostDetail} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

