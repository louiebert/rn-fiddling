import * as React from 'react'
import {AppRegistry, Linking, Platform, StatusBar, View} from 'react-native'
import {Provider} from 'mobx-react'
import * as Expo from 'expo'

import stores from './src/stores/index'
import Navigation from './src/components/Navigation'

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix =
  Platform.OS == 'android' ? 'rnfiddling://rnfiddling/' : 'rnfiddling://'

class App extends React.Component {
  componentDidMount() {
    Linking.addEventListener('url', this.handleUrl)
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleUrl)
  }

  handleUrl = ({url}: {url: string}) => {
    console.log(url)
    console.log('yo')
    if (!url.includes('+/redirect')) {
      return
    }
    Expo.WebBrowser.dismissBrowser()
  }

  render() {
    return (
      <Provider {...stores}>
        <Navigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Navigation', () => Navigation)

export default App
