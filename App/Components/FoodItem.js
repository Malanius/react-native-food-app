import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/FoodItemStyles'

export default class FoodItem extends Component {
    render() {
        return (

            <View style={styles.foodCard}>
                <View>
                    <Image style={styles.foodImage}
                        source={this.props.image}
                        resizeMode={'contain'}
                        blurRadius={3} />
                </View>
                <View style={styles.textView}>
                    <TouchableOpacity onPress={() => alert(this.props.text)}>
                        <Text style={styles.text}>{this.props.text}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
