import * as React from 'react'
import {AppRegistry, StatusBar, View} from 'react-native'

import Navigation from './src/components/Navigation'

const App: React.StatelessComponent = () =>
  <Navigation>
    <StatusBar hidden />
  </Navigation>

AppRegistry.registerComponent('Navigation', () => Navigation)

export default App
