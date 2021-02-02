
import React, { useEffect, useState } from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import { Card, Title, Paragraph } from 'react-native-paper';

const url = 'http://127.0.0.1:3010/recipe/';

export default function Show({ navigation, route }) {
    console.log(route);
    const id = route.params.id;
    console.log(id)
    const [recipe, setRecipe] = useState({})

    const fetchRecipe = async () => {
        try {
            const res = await fetch (
                `${url}${id}`
            );
            const data = await res.json();
            setRecipe(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchRecipe();
    }, [])

    return (
        <View style={styles.container}>
            {console.log(recipe)}
          <Text>{recipe.title}</Text>
        </View>
    )
};
