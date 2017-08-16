import * as React from 'react'
import {Button, Text, View} from 'react-native'
import {NavigationScreenProps} from 'react-navigation'

const HomeScreen: React.StatelessComponent<NavigationScreenProps<{}>> = props =>
  <View>
    <Text>Hello, Navigation!</Text>
    <Button
      onPress={() => props.navigation.navigate('Chat', {user: 'Lucy'})}
      title="Chat with Lucy"
    />
  </View>

export default HomeScreen
