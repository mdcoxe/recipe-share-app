import React, { useState } from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import styles from './styles'
import { Button, TextInput } from 'react-native-paper';
import RecipeForm from '../RecipeForm';
import StyledButton from '../StyledButton';

const prod = 'http://localhost:3010';
const dev = 'http://localhost:3010';
const url = (process.env.NODE_ENV ==='development' ? dev : prod)

const CreateRecipe = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [servings, setServings] = useState('')
    const [creator, setCreator] = useState('') 
    const [prep, setPrep] = useState('')
    const [cook, setCook] = useState('')
    const [temp, setTemp] = useState('')
    
console.log(title)

    const submitData = async (event) => {
        // event.preventDefault();
        const body = JSON.stringify({
            title: title.current.value,
            description: description,
            img: img,
            servings: servings,
            creator: creator
        })
        try {
            const response = await fetch(
                `${url}/recipe`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body
                })
            const data = await response.json();
            setRecipe(data)
            console.log(data)
        } catch (error) {
            console.error(400)
        }
    }
    //     fetch('http://localhost:3010/recipe/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             title: title,
    //             description: description,
    //             img: img,
    //             servings: servings,
    //             creator: creator
    //         }),
            
    //     })
    //     console.log(JSON)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         Alert.alert(`${data.title} is saved successfuly`)
    //         navigation.navigate('Scrumptious')
    //     })
    //     .catch(err=>{
    //         console.warn('Yep, still broke')
    //     })
    // }
    
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
                value={servings}
                mode="outlined"
                theme={theme}
                onChangeText={text => setCreator(text)}
                styles={styles.inputStyle}
            /> 
            <StyledButton 
                type="secondary"
                onPress={submitData} 
                content="Create Recipe"   
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
            {console.log(title)}

        </View>
     
    )
}
const theme = {
    colors: {
        primary: '#5D0C1D'
    }
}

export default CreateRecipe;