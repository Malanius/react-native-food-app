import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

import HeaderLanding from '../Components/HeaderMain'
import FoodGroup from '../Components/FoodGroup'

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
          <FoodGroup image={burgerImage} text="BURGERS" navigate={navigate} />
          <FoodGroup image={chickenImage} text="CHICKEN" navigate={navigate} />
          <FoodGroup image={pizzaImage} text="PIZZA" navigate={navigate} />
        </ScrollView>
      </View>
    )
  }
}
