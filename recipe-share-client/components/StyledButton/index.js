import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? 'white' : '#f2a22c';
    const textColor = type === 'primary' ? 'black' : 'white';

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity style={styles.buttonxx}> */}

            <Pressable
                title={content} 
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => { onPress()}}
                >
                <Text style={[styles.text, {color: textColor}]}> {content}</Text>
            </Pressable>
            {/* </TouchableOpacity> */}
        </View>
    )
};

export default StyledButton;