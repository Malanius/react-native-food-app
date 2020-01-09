import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'


// Styles
import styles from './Styles/FoodItemStyles'

const burger = require('../Images/food/burger.jpg')

const foodItem = (props) => (

    <TouchableOpacity onPress={() => alert("Food item pressed.")}>
        <View style={styles.foodItemView}>
            <View style={styles.price}>
                <Text style={styles.priceText}>{props.price}</Text>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.foodImage} source={props.image} resizeMode="cover" />
            </View>

            <View style={styles.description}>
                <View style={styles.descritptionText}>
                    <Text style={styles.foodTitle}>{props.title}</Text>
                    <Text style={styles.foodBody}>{props.description}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>

)

export default foodItem;
