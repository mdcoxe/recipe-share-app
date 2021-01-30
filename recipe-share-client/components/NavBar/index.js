import React, { useState } from 'react';
import { View } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import styles from './styles';

const CustomNavigationBar = ({ navigation, previous }) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu =() => setVisible(false);
  
    return (
      <Appbar.Header>
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title='Scrumptious' />
        {previous ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action 
                icon='menu' 
                color='white' 
                onPress={openMenu}
              />
            }>
              <Menu.Item 
                onPress={() => {navigation.navigator('Scrumptious')}}
                title="Home"
              />
              <Menu.Item 
                onPress={() => {navigation.navigator('Feed')}}
                title="Recipes"
              />
              <Menu.Item 
                onPress={() => {navigation.navigator('Login')}}
                title="Login"
              />
              <Menu.Item 
                onPress={() => {navigation.navigator('Register')}}
                title="Sign-Up"
              />
            </Menu>
        ): null }
            
      </Appbar.Header>
    )
  }

export default CustomNavigationBar;