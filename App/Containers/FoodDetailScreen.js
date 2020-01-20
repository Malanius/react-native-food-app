import React, { Component } from 'react'
import { Text, ImageBackground } from 'react-native'
import { Container, View, Content } from 'native-base'

import HeaderFood from '../Components/HeaderFood';

import styles from './Styles/FoodDetailStyles';

export default class FoodDetailScreen extends Component {

  render() {
    return (
      <Container>
        <HeaderFood navigation={this.props.navigation} />
        <ImageBackground source={require('../Images/food/burger.jpg')} style={styles.bgImage} />

        <Content style={styles.foodContent}>
          <View style={styles.detail}>
            <View style={styles.name}>
              <Text style={styles.nameText}>Example food</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}>$333</Text>
            </View>
          </View>
        </Content >
      </Container >

    )
  }
}
