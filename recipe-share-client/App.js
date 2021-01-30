import 'react-native-gesture-handler';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Feed from './components/Feed';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Scrumptious'
      >
        <Stack.Screen 
          name='Scrumptious' 
          component={Home} 
        />
        <Stack.Screen 
          name='Feed' 
          component={Feed} 
        />
        {/* Can possibly use this to build the logged in users favorites feed */}
        {/* <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={someData} />}
        </Stack.Screen> */}
        <Stack.Screen 
          name='Login' 
          component={Login} 
        />
        <Stack.Screen 
          name='Register' 
          component={Register} 
        />
        <Stack.Screen 
          name='CreateRecipe' 
          component={CreateRecipe} 
        />
        <Stack.Screen 
          name='EditRecipe' 
          component={EditRecipe} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

