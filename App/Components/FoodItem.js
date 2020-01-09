import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/FoodItemStyles'

const foodItem = (props) => (

    <View style={styles.foodCard}>
        <View>
            <Image style={styles.foodImage}
                source={props.image}
                resizeMode={'contain'}
                blurRadius={3} />
        </View>
        <View style={styles.textView}>
            <TouchableOpacity onPress={() => props.navigate('FoodScreen', {
                title: props.text
            })}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    </View>

)

export default foodItem;
