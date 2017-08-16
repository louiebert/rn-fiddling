import * as React from 'react'
import {AppRegistry, StyleSheet, Text, View} from 'react-native'

import Navigation from './src/components/Navigation'

class App extends React.Component {
  render() {
    return <Navigation />
  }
}

AppRegistry.registerComponent('Navigation', () => Navigation)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
