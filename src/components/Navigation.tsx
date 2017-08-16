import * as React from 'react'
import {Platform, StatusBar} from 'react-native'
import {StackNavigator} from 'react-navigation'

import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'

const Navigation = StackNavigator(
  {
    Home: {screen: HomeScreen, navigationOptions: {title: 'Welcome'}},
    Chat: {screen: ChatScreen}
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    initialRouteName: 'Home'
  }
)

export default Navigation
