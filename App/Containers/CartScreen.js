import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Text } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CartActions from '../Redux/CartRedux'

import HeaderFood from '../Components/HeaderFood'

import styles from './Styles/CartScreenStyles.js'
import CartItem from '../Components/CartItem'


class CartScreen extends Component {

    static propTypes = {
        setItemcountup: PropTypes.func,
        setItemcountdown: PropTypes.func,
        setRemoveItem: PropTypes.func
    }

    render() {
        return (
            <View>
                <HeaderFood navigation={this.props.navigation} />
                <View style={styles.parentView}>
                    <Content>
                        {this.props.cart && this.props.cart.length && this.props.cart.map((item) => (
                            <CartItem key={item.title}
                                key={item.title}
                                title={item.title}
                                price={item.price}
                                count={item.count} />
                        )) ||
                            <Text style={styles.emptyText}>The cart is empty</Text>
                        }
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItemcountup: (itemKey) => dispatch(CartActions.changeItemcountup(itemKey)),
        setItemcountdown: (itemKey) => dispatch(CartActions.changeItemcountdown(itemKey)),
        setRemoveItem: (itemKey) => dispatch(CartActions.changeRemoveitem(itemKey))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);