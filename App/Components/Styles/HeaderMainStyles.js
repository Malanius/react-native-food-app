import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? '10%' : '8%',
        flex: 0,
        zIndex: 5
    },
    header: {
        backgroundColor: 'orange'
    },
    body: {
    },
    icon: {
        color: 'white',
        fontSize: 30
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: '800',
        textAlign: 'center'
    }
})
