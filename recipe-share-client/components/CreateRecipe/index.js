import React, { useState } from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import styles from './styles'
import { Button, TextInput } from 'react-native-paper';
import RecipeForm from '../RecipeForm';
import StyledButton from '../StyledButton';

const CreateRecipe = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [servings, setServings] = useState('')
    const [creator, setCreator] = useState('') 
    const [prep, setPrep] = useState('')
    const [cook, setCook] = useState('')
    const [temp, setTemp] = useState('')
    
    const submitData = async (event) => {
        const body = JSON.stringify({
            title: title,
            description: description,
            img: img,
            servings: servings,
            creator: creator
        })
        try {
            const response = await fetch(
                `http://127.0.0.1:3010/recipe`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body
                })
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <View style={styles.container}>
            <TextInput 
                label='Recipe Name'
                value={title}
                mode="outlined"
                theme={theme}
                onChangeText={text => setTitle(text)}
                styles={styles.inputStyle}
            /> 
            <TextInput 
                label='Short Description'
                value={description}
                mode="outlined"
                theme={theme}
                onChangeText={text => setDescription(text)}
                styles={styles.inputStyle}
            /> 
            <TextInput 
                label='Image URL'
                value={img}
                mode="outlined"
                theme={theme}
                onChangeText={text => setImg(text)}
                styles={styles.inputStyle}
            /> 
            <TextInput 
                label='Number of Servings'
                value={servings}
                mode="outlined"
                theme={theme}
                keyboardType="number-pad"
                onChangeText={text => setServings(text)}
                styles={styles.inputStyle}
            /> 
            <TextInput 
                label='Creator'
                value={creator}
                mode="outlined"
                theme={theme}
                onChangeText={text => setCreator(text)}
                styles={styles.inputStyle}
            /> 
            <Button 
                style={styles.inputStyle}
                icon="content-save"
                mode='contained'
                theme={theme}
                onPress={() => submitData()}
            >
                Save Recipe
            </Button>
        </View>
     
    )
}
const theme = {
    colors: {
        primary: '#5D0C1D'
    }
}

export default CreateRecipe;