import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5D0C1D',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 10,
        margin: 0,
        flex:1
    },
    logo: {
        width: '85%',
    },
    title: {
        color: '#f2a22c',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 25,
        padding: 10,
    },
    subtitle: {
        color: '#f2a22c',
    },
    text: {
        color: '#f2a22c',
        textAlign: 'center',
    },
    image: {
        alignSelf: 'center',
        height: '80%' | 250,
        width:  '80%',
        resizeMode: 'center'
    },
})

export default styles;