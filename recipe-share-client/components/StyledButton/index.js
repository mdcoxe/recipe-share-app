import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const StyledButton = (props) => {
    const navigation = useNavigation();
    const { type, content, onPress} = props;
    const backgroundColor = type === 'primary' ? 'white' : '#f2a22c';
    const textColor = type === 'primary' ? '#5D0C1D' : 'white';

    return (
        <View style={styles.container}>
            <Button
                mode="contained"
                title={content} 
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => { onPress()}}
                >
                <Text style={[styles.text, {color: textColor}]}> {content}</Text>
            </Button>
        </View>
    )
};

export default StyledButton;