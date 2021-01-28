import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>
    )
}

export default NavBar;