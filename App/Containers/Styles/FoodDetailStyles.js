import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%'
    },
    foodContent: {
        position: 'absolute',
        flex: 0,
        marginTop: '20%',
        width: '100%',
        height: '100%'
    },
    detail: {
        flexDirection: 'row'
    },
    name: {
        height: height / 3,
        width: width / 2,
        marginLeft: '5%'
    },
    nameText: {
        position: 'absolute',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: '30%'
    },
    price: {
        marginLeft: '5%',
        height: height / 3,
        width: '30%',
        alignItems: 'center'
    },
    priceText: {
        position: 'absolute',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: '50%'
    }
})
