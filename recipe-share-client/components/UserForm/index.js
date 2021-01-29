import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';

const UserForm = () => {
  return (
        <View style={styles.userForm}>
            <Text style={styles.text}>Username: </Text>
            <TextInput
                style={{ height: 40, width: 300 | '80%', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                // onChangeText={text => onChangeText(text)}
                // value={value}
            />
            <Text style={styles.text}>Password: </Text>
            <TextInput
                style={{height: 40, width: 300 | '80%',  backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                // onChangeText={text => onChangeText(text)}
                // value={value}
                secureTextEntry={true}
            />
        </View>
    )
};

export default UserForm;
