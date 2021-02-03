import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button, TextInput } from 'react-native-paper';
import StyledButton from '../StyledButton';

const EditRecipe = ({route, navigation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [servings, setServings] = useState('');
    const [creator, setCreator] = useState('');
    const [prep, setPrep] = useState('');
    const [cook, setCook] = useState('');
    const [temp, setTemp] = useState('');
    const [recipe, setRecipe] =useState({});


    
    const id = route.params.id;
    //For ios and web testing
    // const url = 'http://127.0.0.1:3010/recipe/';
    // for android testing
    const url = 'http://10.0.2.2:3010/recipe/'

    const escapePage = () => {
        navigation.navigate('Feed');
    };

    const fetchRecipe = async () => {
        const body = JSON.stringify({
            title: title,
            description: description,
            img: img,
            servings: servings,
            creator: creator,
            prep: prep,
            cook: cook,
            temp, temp,
        
        })
        try {
            const res = await fetch (
                `${url}${id}`
            );
            const data = await res.json();
            setRecipe(data)
        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        fetchRecipe();
    }, []);

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
        
        })
        try {
            const response = await fetch(
                `${url}${id}`, 
                {
                    method: 'PUT',
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
    const deleteRecipe = async () => {
        try {
          const response = await fetch(`${url}${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = await response.json();
        } catch (error) {
          console.log(error);
        }
        // props.history.push('/')
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
            <StyledButton 
                style={styles.button}
                type='xxx'
                onPress={() => submitData()}
                content="Update Recipe"
            />
            <StyledButton 
                style={styles.button}
                type='xxx'
                onPress={() => deleteRecipe()}
                content="Delete Recipe"
            />
        </View>
    )
};
const theme = {
    colors: {
        primary: '#5D0C1D'
    }
};


export default EditRecipe;