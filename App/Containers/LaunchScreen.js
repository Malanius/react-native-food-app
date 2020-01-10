import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Drawer } from 'native-base'

import HeaderLanding from '../Components/HeaderMain'
import FoodGroup from '../Components/FoodGroup'
import Sidebar from '../Components/Sidebar'

import { burgers, chicken, pizza, coldDrinks, hotBevarages } from '../Components/Menu'

// Styles
import styles from './Styles/LaunchScreenStyles'

//Images
const burgerImage = require('../Images/food/burger.jpg')
const chickenImage = require('../Images/food/chicken.jpg')
const pizzaImage = require('../Images/food/pizza.jpg')

export default class LaunchScreen extends Component {


  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  goToBurgers = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'BURGERS',
      items: burgers
    });
    this.closeDrawer();
  }

  goToChicken = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'CHICKEN',
      items: chicken
    });
    this.closeDrawer();
  }

  goToPizza = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'PIZZA',
      items: pizza
    });
    this.closeDrawer();
  }

  goToColdDrinks = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'COLD DRINKS',
      items: coldDrinks
    });
    this.closeDrawer();
  }

  goToHotBevarages = () => {
    this.props.navigation.navigate('FoodScreen', {
      title: 'HOT BEVARAGES',
      items: hotBevarages
    });
    this.closeDrawer();
  }

  render() {

    return (
      <Drawer ref={(ref) => this.drawer = ref}
        content={<Sidebar
          goToBurgers={this.goToBurgers}
          goToChicken={this.goToChicken}
          goToPizza={this.goToPizza}
          goToColdDrinks={this.goToColdDrinks}
          goToHotBevarages={this.goToHotBevarages}
        />}
        onClose={() => this.closeDrawer()}
      >

        <View style={styles.mainContainer}>
          <HeaderLanding openDrawer={this.openDrawer} navigation={this.props.navigation} />
          <ScrollView style={styles.scroll}>
            <FoodGroup image={burgerImage} text="BURGERS" goTo={this.goToBurgers} />
            <FoodGroup image={chickenImage} text="CHICKEN" goTo={this.goToChicken} />
            <FoodGroup image={pizzaImage} text="PIZZA" goTo={this.goToPizza} />
          </ScrollView>
        </View>
      </Drawer>
    )
  }
}
