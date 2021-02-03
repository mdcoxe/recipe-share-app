import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';
import StyledButton from '../StyledButton';
import RecipeCard from '../RecipeCard';

 //For ios and web testing
    // const url = 'http://127.0.0.1:3010/recipe/';
    // for android testing
    const url = 'http://10.0.2.2:3010/recipe/'


const Feed = ({ navigation }) => {
    const isFocused = useIsFocused();

    const [recipeCards, setRecipeCard] = useState([]);

    const getFeed = async () => {
        try {
            const response = await fetch (`${url}`);
            const json = await response.json();
            setRecipeCard(json);
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getFeed();
        
    }, [isFocused]);
    
    return (
        <View style={styles.container}>
            <Text style ={styles.title}>
                Scrumptious Recipes
            </Text>
            <FlatList
                data={recipeCards}
                key={recipeCards._id}
                renderItem={({item}) => <RecipeCard recipeCard={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                declerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                keyExtractor={(item, index) => index.toString()}
            />
            <StyledButton 
                type="primary"
                onPress={() => {navigation.navigate('CreateRecipe')}}
                content="Create Recipe"
            />
        </View>
    )
};

export default Feed;