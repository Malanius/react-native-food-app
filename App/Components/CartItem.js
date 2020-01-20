import React from 'react'
import { Text, Image } from 'react-native'
import { Button, Icon, View } from 'native-base'
import { SwipeRow } from 'react-native-swipe-list-view';

import styles from './Styles/CartItemStyles'

const cartItem = (props) => (

  <View style={styles.itemView}>
    <SwipeRow leftOpenValue={100} rightOpenValue={-100} disableRightSwipe>

      <View style={styles.standaloneRowBack}>
        <Text />
        <Button danger onPress={() => props.delete(props.itemKey)}>
          <Icon active name="trash" />
        </Button>
      </View>

      <View style={styles.standaloneRowFront}>
        <Image source={require('../Images/food/burger.jpg')}
          style={styles.itemImage} />

        <View style={styles.itemTextView}>
          <Text style={styles.itemTitle}>{props.title}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>

        <View style={styles.counterView}>
          <Button transparent onPress={() => { props.increase(props.itemKey) }}>
            <Icon name="arrow-dropup" style={styles.counterIconUp} />
          </Button>

          <Text style={styles.itemCount}>{props.count}</Text>

          <Button transparent onPress={() => { props.decrease(props.itemKey) }}>
            {props.count == 1
              ? <Icon name="arrow-dropdown" style={styles.counterIconDownDisabled} />
              : <Icon name="arrow-dropdown" style={styles.counterIconDown} />
            }
          </Button>
        </View>
      </View>

    </SwipeRow>
  </View>

)

export default cartItem;