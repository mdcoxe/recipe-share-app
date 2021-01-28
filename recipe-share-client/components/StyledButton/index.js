import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? 'red' : 'yellow';
    const textColor = type === 'primary' ? 'yellow' : 'red';

    return (
        <View style={styles.container}>
            <Pressable
                title={content} 
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => { onPress()}}
            >
                <Text style={[styles.text, {color: textColor}]}> {content}</Text>
            </Pressable>
        </View>
    )
};

export default StyledButton;