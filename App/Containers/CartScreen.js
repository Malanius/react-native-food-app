import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Text } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view';

import HeaderFood from '../Components/HeaderFood'

import styles from './Styles/CartScreenStyles.js'
import CartItem from '../Components/CartItem'


export default class CartScreen extends Component {

    state = {
        items: [
            {
                title: "Item 1",
                price: "$10",
                count: 1
            },
            {
                title: "Item 2",
                price: "$10",
                count: 1
            },
            {
                title: "Item 3",
                price: "$10",
                count: 1
            },
            {
                title: "Item 4",
                price: "$10",
                count: 1
            },
            {
                title: "Item 5",
                price: "$10",
                count: 1
            }
        ]
    }

    render() {
        return (
            <View>
                <HeaderFood navigation={this.props.navigation} />
                <View style={styles.parentView}>
                    <Content>
                        {this.state.items.map((item) => (
                            <CartItem key={item.title}
                                title={item.title}
                                price={item.price}
                                count={item.count} />
                        ))}
                    </Content>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>
                            Total:
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
