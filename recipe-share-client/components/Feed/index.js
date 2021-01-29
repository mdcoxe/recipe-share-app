import * as React from 'react';
import { Text, View, Button, Image} from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';
import RecipeCard from '../RecipeCard';

const Feed = ({ navigation }) => {
  
   
    return (
        <View style={styles.container}>
            <Text>Feed  Page</Text>

          <RecipeCard />
          <StyledButton 
                type="primary"
                onPress={() => {navigation.navigate('CreateRecipe')}}
                content="Create Recipe"
                />
        </View>
    )
}

export default Feed;