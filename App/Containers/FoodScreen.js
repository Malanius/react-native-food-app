import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import styles from './Styles/FoodScreenStyles'
import { Text } from 'native-base'

const foodScreen = (props) => (

    <Container>
        <HeaderFood navigate={props.navigation} />
        <Content style={styles.content}>
            <Text style={styles.title}>{props.navigation.getParam('title', '')}</Text>
        </Content>
    </Container>

)

export default foodScreen;