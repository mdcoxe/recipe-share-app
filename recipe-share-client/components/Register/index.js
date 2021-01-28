import React, { useState } from 'react';
import { Text, View, TextInput, Image} from 'react-native';
import styles from './styles';
import UserForm from '../UserForm';
import { StatusBar } from 'expo-status-bar';
import StyledButton from '../StyledButton';

const Register = () => {
    const [value, onChangeText] = useState('') 
    const handlePress = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.image} source={require('../../assets/images/scrumprectlogo.png')} />
            </View>
            <Text style={styles.title}>Welcome Back!!</Text>
            <Text style={styles.text}> To create, edit, delete, or save a recipe, please login to your account, if you don't have an account please click on register
            </Text>
            
            <UserForm />


            <StyledButton 
                type="secondary"
                onPress={() => {handlePress()}}
                content="Register"
                />
            <StyledButton 
                type="primary"
                onPress={() => {navigation.navigate('Register')}}
                content="Login"
                />
            <StatusBar style="auto" />
        </View>
    )
}

export default Register;