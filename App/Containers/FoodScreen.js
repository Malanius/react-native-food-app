import React from 'react'
import { View } from 'react-native'

import HeaderFood from '../Components/HeaderFood'
import styles from './Styles/LaunchScreenStyles'
import { Text } from 'native-base'

const foodScreen = (props) => (

    <View style={styles.mainContainer}>
        <HeaderFood navigate={props.navigation} />
        <View>
            <Text>{props.navigation.getParam('title', '')}</Text>
        </View>
    </View>

)

export default foodScreen;