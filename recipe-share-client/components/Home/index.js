
import * as React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.image} source={require('../../assets/images/scrumprectlogo.png')} />
            </View>
            <Text style={styles.title}>Welcome to Scrumptious</Text>
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
        </View>
    )
};

