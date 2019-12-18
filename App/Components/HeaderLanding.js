import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon } from 'native-base'

// Styles
import styles from './Styles/HeaderScreenStyles'


export default class HeaderLanding extends Component {
  render () {
    return (
      <Container>
        <Header style={styles.header}>
            <Left>
                <Button transparent onPress={()=> alert("Menu button pressed!")}>
                    <Icon name="menu" style={styles.icon}/>
                </Button>
            </Left>
            <Body>
                <Text style={styles.title}>BBQ</Text>
            </Body>
            <Right>
                <Button transparent onPress={()=> alert("Checkout button pressed!")}>
                    <Icon type="FontAwesome5" name="shopping-cart" style={styles.icon}/> 
                </Button>
            </Right>
        </Header>
      </Container>
    )
  }
}
