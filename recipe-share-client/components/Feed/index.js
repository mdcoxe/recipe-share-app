import * as React from 'react';
import { Text, View, Button, Image} from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton';
import RecipeCard from '../RecipeCard';

const Feed = () => {
  
   
    return (
        <View style={styles.container}>
            <Text>Feed  Page</Text>

          <RecipeCard />

        </View>
    )
}

export default Feed;