import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

import HeaderLanding from '../Components/HeaderMain'
import FoodItem from '../Components/FoodGroup'

// Styles
import styles from './Styles/LaunchScreenStyles'

//Images
const burgerImage = require('../Images/food/burger.jpg')
const chickenImage = require('../Images/food/chicken.jpg')
const pizzaImage = require('../Images/food/pizza.jpg')

export default class LaunchScreen extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <HeaderLanding />
        <ScrollView style={styles.scroll}>
          <FoodItem image={burgerImage} text="BURGERS" navigate={navigate} />
          <FoodItem image={chickenImage} text="CHICKEN" navigate={navigate}/>
          <FoodItem image={pizzaImage} text="PIZZA" navigate={navigate}/>
        </ScrollView>
      </View>
    )
  }
}
