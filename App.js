import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Deneme from './Deneme';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="Register Page" component={RegisterPage} />
        <Stack.Screen name="Deneme" component={Deneme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;