import * as React from 'react';
import { Card, Paragraph } from 'react-native-paper';
import styles from './styles'
import StyledButton from '../StyledButton';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = (props) => {
    const navigation = useNavigation();
    const { title, description, servings, prep, cook, _id} = props.recipeCard;

    return (
        <Card style={styles.card} >
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
                <StyledButton 
                    type="xxx"
                    onPress={() => {navigation.navigate('ViewRecipe', { id: _id})}}
                    content="View Recipe"
                />
            </Card.Content>
        </Card>
    )
};

export default RecipeCard;