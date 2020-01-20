import React, { Component } from 'react'
import { Text, ImageBackground } from 'react-native'
import { Container, View, Content, Button, Icon } from 'native-base'

import HeaderFood from '../Components/HeaderFood';

import styles from './Styles/FoodDetailStyles';

export default class FoodDetailScreen extends Component {

  render() {

    const image = this.props.navigation.getParam('image', 'ERR');
    const title = this.props.navigation.getParam('title', 'ERR');
    const price = this.props.navigation.getParam('price', 'ERR');

    return (
      <Container>
        <HeaderFood navigation={this.props.navigation} />
        <ImageBackground source={image} style={styles.bgImage} />

        <Content style={styles.foodContent}>
          <View style={styles.detail}>
            <View style={styles.name}>
              <Text style={styles.nameText}>{title}</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}>{price}</Text>
            </View>
          </View>

          <Button iconLeft dark style={styles.addButton}
            onPress={() => { alert('Added') }}>
            <Text style={styles.addText}>ADD</Text>
            <Icon type="MaterialCommunityIcons" name="plus" style={styles.addIcon} />
          </Button>

        </Content >
      </Container >

    )
  }
}
