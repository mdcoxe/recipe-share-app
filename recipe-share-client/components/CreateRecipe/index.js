import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const prod = 'http://localhost:3000';
const dev = 'http://localhost:3010';
const url = (process.env.NODE_ENV ==='development' ? dev : prod)

const CreateRecipe = ({ navigation }) => {
    const [recipeData, setRecipe] = useState([]);
    const reqTitle = useRef(null);
    const reqCreator = useRef(null);

    const popRecipeDB = async (event) => {
      
        const body = JSON.stringify({
            title: reqTitle.current.value,
            creator: reqCreator.current.value,
        })
        try {
            const response = await fetch(
                `${url}/recipe/`, {
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
            console.error(400).json(error)
        }
    }
   
    return (
        
        <View style={styles.container}>
             <View style={styles.userForm}>
            <Text style={styles.text}>Username: </Text>
            <TextInput
                style={{ height: 40, width: 300 | '80%', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                // onChangeText={text => onChangeText(text)}
                ref={reqTitle}
                // value={value}
            />
            <Text style={styles.text}>Password: </Text>
            <TextInput
                style={{height: 40, width: 300 | '80%',  backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                ref={reqCreator}
                // onChangeText={text => onChangeText(text)}
                // value={value}
                secureTextEntry={true}
            />
            <StyledButton 
                type="secondary"
                onPress={popRecipeDB} 
                content="Create Recipe"   
            />
            </View>
        </View>
    )
}

export default CreateRecipe;