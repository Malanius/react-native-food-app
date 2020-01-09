import { StyleSheet, Dimensions } from 'react-native'

let height = Dimensions.get('window').height;

export default StyleSheet.create({

    foodItemView: {
        width: '100%',
        height: height / 4,
        padding: '5%',
    },
    price: {
        backgroundColor: '#8DBA25',
        height: '20%',
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 5
    },
    priceText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400'
    },
    imageView: {
        width: '60%',
        height: '80%',
        position: 'absolute',
        paddingTop: '15%',
        paddingLeft: '10%'
    },
    foodImage: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    description: {
        height: '60%',
        width: '60%',
        position: 'absolute',
        zIndex: -1,
        marginLeft: '35%',
        marginTop: '5%',
        borderRadius: 40,
        backgroundColor: '#F4F4F4'
    },
    descritptionText: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        marginLeft: '40%'
    },
    foodTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 18
    },
    foodBody: {
        textAlign: 'center',
        fontWeight: '400',
        paddingTop: 5,
        fontSize: 16
    }
})
