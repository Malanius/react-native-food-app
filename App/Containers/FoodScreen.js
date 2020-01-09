import React from 'react'
import { View } from 'react-native'

import HeaderFood from '../Components/HeaderFood'
import styles from './Styles/LaunchScreenStyles'

const foodScreen = (props) => (

    <View style={styles.mainContainer}>
        <HeaderFood navigate={props.navigation} />
    </View>

)

export default foodScreen;