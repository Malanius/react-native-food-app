import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

// Styles
import styles from './Styles/FoodItemStyles'

const burgerImage = require('../Images/burger.jpg')

export default class FoodItem extends Component {
    render() {
        return (
            <View style={styles.foodCard}>
                <View>
                    <Image style={styles.foodImage}
                        source={burgerImage}
                        resizeMode={'contain'}
                        blurRadius={3} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>BURGERS</Text>
                </View>
            </View>
        )
    }
}
