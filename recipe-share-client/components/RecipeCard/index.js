import * as React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './styles'
import StyledButton from '../StyledButton';

const RecipeCard = (props, { navigation }) => {
    const { title, description, servings, prep, cook, _id} = props.recipeCard;

   
    return (
        <Card style={styles.card} key={_id}>
            <Card.Title
                title={title}
                titleStyle={{textTransform: 'capitalize', fontSize: 20}}
                subtitle={description}
                subtitleStyle={{fontSize: 14}}
                subtitleNumberOfLines={3}
                
                
                /> 
            <Card.Content style={styles.content}>
                
                <Paragraph>
                    Prep time: {prep}
                </Paragraph>
                <Paragraph>
                    Cook Time: {cook}
                </Paragraph>
                <Paragraph>
                    Number of Servings: {servings}
                </Paragraph>
            </Card.Content>

        </Card>
    )
}

export default RecipeCard;