import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'


// Styles
import styles from './Styles/FoodItemStyles'

const burger = require('../Images/food/burger.jpg')

const foodItem = (props) => (

    <TouchableOpacity onPress={() => alert("Food item pressed.")}>
        <View style={styles.foodItemView}>
            <View style={styles.price}>
                <Text style={styles.priceText}>$10</Text>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.foodImage} source={burger} resizeMode="cover" />
            </View>

            <View style={styles.description}>
                <View style={styles.descritptionText}>
                    <Text style={styles.foodTitle}>Title</Text>
                    <Text style={styles.foodBody}>Food item description text goes here</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>

)

export default foodItem;
