import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'


import { burgers, chicken, pizza } from '../Components/Menu'
// Styles
import styles from './Styles/FoodGroupStyles'

const foodGroup = (props) => {

    let items = burgers;
    if (props.text === "CHICKEN"){
        items = chicken;
    }if (props.text === "PIZZA"){
        items = pizza;
    }

    return (
        <View style={styles.foodCard}>
            <View>
                <Image style={styles.foodImage}
                    source={props.image}
                    resizeMode={'contain'}
                    blurRadius={3} />
            </View>
            <View style={styles.textView}>
                <TouchableOpacity onPress={() => props.navigate('FoodScreen', {
                    title: props.text,
                    items: items
                })}>
                    <Text style={styles.text}>{props.text}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default foodGroup;
