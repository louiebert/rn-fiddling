import * as React from 'react'
import {Button, Text, View} from 'react-native'
import {NavigationScreenProps} from 'react-navigation'

class HomeScreen extends React.Component<NavigationScreenProps<{}>> {
  static navigationOptions = {
    title: 'Welcome'
  }

  render() {
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}

export default HomeScreen
