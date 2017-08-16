import * as React from 'react'
import {Text, View} from 'react-native'
import {NavigationScreenProps, NavigationProp} from 'react-navigation'

type Params = {
  user?: string
}

class ChatScreen extends React.Component<NavigationScreenProps<Params>> {
  static navigationOptions = ({navigation}: NavigationScreenProps<Params>) => ({
    title: `Chat with ${navigation.state.params.user}`
  })

  render() {
    return (
      <View>
        <Text>
          Chat with {this.props.navigation.state.params.user}!
        </Text>
      </View>
    )
  }
}

export default ChatScreen
