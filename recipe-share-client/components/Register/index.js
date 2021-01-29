import React, { useState } from 'react';
import { Text, View, TextInput, Image} from 'react-native';
import styles from './styles';
import UserForm from '../UserForm';
import { StatusBar } from 'expo-status-bar';
import StyledButton from '../StyledButton';

const Register = ({ navigation }) => {
    const [value, onChangeText] = useState('') 
    const handlePress = () => {
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.image} source={require('../../assets/images/scrumprectlogo.png')} />
            </View>
            <Text style={styles.title}>Sign-up here</Text>
            <Text style={styles.text}> Please sign up so you can save recipes for later, add your own recipes and even come back and fine tune them for future use.
            </Text>
            
            <UserForm />


            <StyledButton 
                type="secondary"
                onPress={() => {handlePress()}}
                content="Register"
                />
            <StyledButton 
                type="primary"
                onPress={() => {navigation.navigate('Login')}}
                content="Login"
                />
            <StatusBar style="auto" />
        </View>
    )
}

export default Register;