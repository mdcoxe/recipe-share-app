import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      width: '100%',
      padding: 10,
   },
   button: {
      height: 40,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '75%',
      borderRadius: 20,
      zIndex: 100,
   },
   text: {
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
   }
});

export default styles;