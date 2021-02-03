import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles'
import { Button, TextInput } from 'react-native-paper';

//For ios and web testing
    // const url = 'http://127.0.0.1:3010/recipe/';
    // for android testing
    // const url = 'http://10.0.2.2:3010/recipe/'
    //live
    const url = 'https://scrumptious1.herokuapp.com/recipe/'
    
const CreateRecipe = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [servings, setServings] = useState('')
    const [creator, setCreator] = useState('') 
    const [prep, setPrep] = useState('')
    const [cook, setCook] = useState('')
    const [temp, setTemp] = useState('')
    const [directions, setDirections] = useState('')
    
    const escapePage = () => {
        navigation.goBack();
    }
    const submitData = async (event) => {
        const body = JSON.stringify({
            title: title,
            description: description,
            img: img,
            servings: servings,
            creator: creator,
            prep: prep,
            cook: cook,
            temp, temp,
            directions: directions
        })
        try {
            const response = await fetch(
                `${url}`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body
                })
            const data = await response.json();
            await escapePage();
        } catch (error) {
            console.log(error)
        }
    };
    
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
                label='Number of Servings'
                value={servings}
                mode="outlined"
                theme={theme}
                keyboardType="number-pad"
                onChangeText={text => setServings(text)}
                styles={styles.inputStyle}
            /> 
            <TextInput 
                label='Prep Time'
                value={prep}
                mode="outlined"
                theme={theme}
                onChangeText={text => setPrep(text)}
                styles={styles.inputStyle}
            /> 
            <TextInput 
                label='Cook Time'
                value={cook}
                mode="outlined"
                theme={theme}
                onChangeText={text => setCook(text)}
                styles={styles.inputStyle}
            /> 
            <TextInput 
                label='Cook Temp'
                value={temp}
                mode="outlined"
                theme={theme}
                onChangeText={text => setTemp(text)}
                styles={styles.inputStyle}
            /> 
              <TextInput 
                label='Directions'
                value={directions}
                mode="outlined"
                multiline={true}
                numberOfLines={4}
                theme={theme}
                onChangeText={text => setDirections(text)}
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