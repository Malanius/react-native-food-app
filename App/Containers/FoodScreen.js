import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import { Text } from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import FoodItem from '../Components/FoodItem'
import styles from './Styles/FoodScreenStyles'

const foodScreen = (props) => (

    <Container>
        <HeaderFood navigate={props.navigation} />
        <Content style={styles.content}>
            <Text style={styles.title}>{props.navigation.getParam('title', '')}</Text>
            <FoodItem />
        </Content>
    </Container>

)

export default foodScreen;