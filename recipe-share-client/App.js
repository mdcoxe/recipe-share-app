import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Feed from './components/Feed';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';
import NavBar from './components/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     
      <StatusBar style="auto" />
      <NavBar />
      <Stack.Navigator initialRouteName='Scrumptious'>
        <Stack.Screen name='Scrumptious' component={Home} />
        <Stack.Screen name='Feed' component={Feed} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        {/* <Stack.Screen name='CreateRecipe' component={CreateRecipe} /> */}
        {/* <Stack.Screen name='EditRecipe' component={EditRecipe} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};