import React, { useState } from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles';
import UserForm from '../UserForm';
import { StatusBar } from 'expo-status-bar';
import StyledButton from '../StyledButton';


const Login = ({ navigation }) => {
    // const [value, onChangeText] = useState('Enter login info') 
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
{/* Do I need to include the first button in the form to handle press or can it operate from here?  both register and login components */}
            <StyledButton 
                type="secondary"
                onPress={() => {handlePress()}}
                content="Login"
                />
            <StyledButton 
                type="primary"
                onPress={() => {navigation.navigate('Register')}}
                content="Register"
                />
            <StatusBar style="auto" />
        </View>
    )
}

export default Login;

