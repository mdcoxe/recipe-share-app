import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const prod = 'http://localhost:3010';
const dev = 'http://localhost:3010';
const url = (process.env.NODE_ENV ==='development' ? dev : prod)

const CreateRecipe = ({ navigation }) => {
    const [recipeName, setRecipe] = useState([]);
    const [value, onChangeText] =useState('testt')
    const reqTitle = useRef(null);
    const reqCreator = useRef(null);

    const popRecipeDB = async (event) => {
      console.log({value})
        const body = JSON.stringify({
            title: value,
            // creator: reqCreator.current.value,
        })
        console.log(body)
        try {
            const response = await fetch(
                `http://127.0.0.1:3010/recipe/`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body
                })
            const data = await response.json();
            // setRecipe(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
   
    return (
        
        <View style={styles.container}>
             <View style={styles.userForm}>
            <Text style={styles.text}>Recipe name: </Text>
            <TextInput
                style={{ height: 40, width: 300 | '80%', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                // ref={reqTitle}
            />
            {/* <Text style={styles.text}>Creator: </Text>
            <TextInput
                style={{height: 40, width: 300 | '80%',  backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                ref={reqCreator}
                // onChangeText={text => onChangeText(text)}
                // value={value}
                // secureTextEntry={true}
            /> */}
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