import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
    container: {
        height: '10%',
        flex: 0,
        zIndex: 5
    },
    header:{
        backgroundColor: 'orange'
    },
    icon: {
        color: 'white',
        fontSize: 30
    },
    title:{
        color: 'white',
        fontSize: 25,
        fontWeight: '800'        
    }
})
