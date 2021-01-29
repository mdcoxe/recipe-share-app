import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image} from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';
import RecipeCard from '../RecipeCard';

const prod = 'http://localhost:3010';
const dev = 'http://localhost:3010';
const url = (process.env.NODE_ENV ==='development' ? dev : prod)

const Feed = ({ navigation }) => {
    const [recipeCard, setRecipeCard] = useState([])
    
    const getFeed = async () => {
        try {
            const response = await fetch ('http://127.0.0.1:3010/recipe');
            const json = await response.json();
            setRecipeCard(json);
            console.log(json)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getFeed();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text>Feed  Page</Text>
            {
                recipeCard.map(recipe => {
                    return (
                        <Text>{recipe.title}</Text>
                    )
                })
            }
           

          
          <StyledButton 
                type="primary"
                onPress={() => {navigation.navigate('CreateRecipe')}}
                content="Create Recipe"
                />
        </View>
    )
}

export default Feed;