
import React, { useEffect, useState } from 'react';
import { View, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import { Card, Paragraph } from 'react-native-paper';

//For ios and web testing
const url = 'http://127.0.0.1:3010/recipe/';
// for android testing
// const url = 'http://10.0.2.2:3010/recipe/'
  
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
            <View style={styles.logo}>
                <Image style={styles.image} source={require('../../assets/images/scrumprectlogo.png')} />
            </View>
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
                        Directions: {recipe.directions}
                    </Paragraph>
                    <Paragraph>Cook Temp: {recipe.temp}</Paragraph>
                    
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
