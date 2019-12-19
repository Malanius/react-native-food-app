import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

import HeaderLanding from '../Components/Header'
import FoodItem from '../Components/FoodItem'

// Styles
import styles from './Styles/LaunchScreenStyles'

//Images
const burgerImage = require('../Images/food/burger.jpg')
const chickenImage = require('../Images/food/chicken.jpg')
const pizzaImage = require('../Images/food/pizza.jpg')

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderLanding />
        <ScrollView style={styles.scroll}>
          <FoodItem image={burgerImage} text="BURGERS"/>
          <FoodItem image={chickenImage} text="CHICKEN"/>
          <FoodItem image={pizzaImage} text="PIZZA"/>
        </ScrollView>
      </View>
    )
  }
}
