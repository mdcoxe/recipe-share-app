import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './styles'
import StyledButton from '../StyledButton';
import RecipeCard from '../RecipeCard';

const prod = 'http://localhost:3010';
const dev = 'http://localhost:3010';
const url = (process.env.NODE_ENV ==='development' ? dev : prod)

const Feed = ({ navigation }) => {
    const [recipeCards, setRecipeCard] = useState([])
    
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
            <Text style ={styles.title}>Scrumptious Recipes</Text>
            <FlatList
                style={styles.flatlist}
                data={recipeCards}
                renderItem={({item}) => <RecipeCard recipeCard={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                declerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
           
           
            {/* {
                recipeCard.map(recipe => {
                    return (
                        <Card key={recipe._id}>
                        <Card.Title 
                            title={recipe.title}
                            description={recipe.description}
                        />
                        <Card.Content>
                            <Title>{recipe.title}</Title>
                            <Paragraph>{recipe.description}</Paragraph>
                        </Card.Content>
                    </Card>
                    )
                })
            } */}
           

          
          <StyledButton 
                type="xxx"
                onPress={() => {navigation.navigate('CreateRecipe')}}
                content="Create Recipe"
                />
        </View>
    )
}

export default Feed;