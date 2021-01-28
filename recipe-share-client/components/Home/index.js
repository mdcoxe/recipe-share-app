import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack'; 
import NavBar from '../NavBar';
// import App from '../../App';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Welcome to Scrumptious</Text>
            <Text style={styles.subtitle}>The community cook-book</Text>
            <Text style={styles.text}>Click the 'Browse Recipe' button below to browse through the community cook-book.</Text>
            <StyledButton 
                type="primary"
                onPress={() => {navigation.navigate('Feed')}}
                content="Browse Recipes"
            />
            <Text style={styles.text}> To create, edit, delete, or save a recipe, sign-up or login to your account</Text>
            <StyledButton 
                type="seconday"
                onPress={() => {navigation.navigate('Login')}}
                content="Login"
            />
            <StyledButton 
                type="seconday"
                onPress={() => {navigation.navigate('Register')}}
                content="Register"
            />
          
            <StatusBar style="auto" />
        </View>
    );
}

