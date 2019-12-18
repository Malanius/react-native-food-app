import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon } from 'native-base'

// Styles
import styles from './Styles/HeaderScreenStyles'


export default class HeaderLanding extends Component {
  render () {
    return (
      <Container>
        <Header>
            <Left>
                <Button transparent onPress={()=> alert("Menu button pressed!")}>
                    <Icon name="menu"/>
                </Button>
            </Left>
            <Body>
                <Text>BBQ</Text>
            </Body>
            <Right>
                <Button transparent onPress={()=> alert("Checkout button pressed!")}>
                    <Icon type="FontAwesome5" name="shopping-cart"/> 
                </Button>
            </Right>
        </Header>
      </Container>
    )
  }
}
