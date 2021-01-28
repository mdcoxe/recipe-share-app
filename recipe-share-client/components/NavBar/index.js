import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const NavBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>

      
  


    )
}

export default NavBar;