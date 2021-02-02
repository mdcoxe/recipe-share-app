
import React, { useEffect, useState } from 'react';
import { Text, View, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import { Card, Title, Paragraph } from 'react-native-paper';

const url = 'http://127.0.0.1:3010/recipe/';

export default function Show({ navigation, route }) {
    const id = route.params.id;
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
    };
    
    useEffect(() => {
        fetchRecipe();
    }, []);

    return (
        <View style={styles.container}>
            <Card style={styles.card} >
                <Card.Title
                    title={recipe.title}
                    titleStyle={{textTransform: 'capitalize', fontSize: 20}}
                    subtitle={recipe.description}
                    subtitleStyle={{fontSize: 14}}
                    subtitleNumberOfLines={3}
                /> 
                <Card.Content style={styles.content}>
                    <Paragraph>
                        Prep time: {recipe.prep}
                    </Paragraph>
                    <Paragraph>
                        Cook Time: {recipe.cook}
                    </Paragraph>
                    <Paragraph>
                        Number of Servings: {recipe.servings}
                    </Paragraph>
                    <Paragraph>
                    </Paragraph>
                    <StyledButton 
                        type="xxx"
                        onPress={() => {navigation.navigate('EditRecipe', { id: recipe._id})}}
                        content="Edit Recipe"
                    />
                    <StyledButton 
                        type="xxx"
                        onPress={() => navigation.goBack()}
                        content="Back to Feed"
                    />
                </Card.Content>
            </Card>       
        </View>
    )
};
