import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Text } from 'native-base'

import HeaderFood from '../Components/HeaderFood'

import styles from './Styles/CartScreenStyles.js'

export default class CartScreen extends Component {
    render() {
        return (
            <View>
                <HeaderFood navigation={this.props.navigation}/>
                <View style={styles.parentView}>
                    <Content>

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
