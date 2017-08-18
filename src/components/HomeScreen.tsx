import * as React from 'react'
import {Button, FlatList, Text, View} from 'react-native'
import {NavigationScreenProps} from 'react-navigation'
import {observer} from 'mobx-react'
import {debounce} from 'lodash'
import * as Expo from 'expo'

import store from '../stores/index'
import {Container} from './StyledComponents'
import SearchInput from './SearchInput'
import ListItem from './ListItem'

const HomeScreen: React.StatelessComponent<
  NavigationScreenProps<{}>
> = props => {
  const debounceInput = debounce((query: string) => {
    store.searchStore.getTrackList(query)
  }, 500)

  const onInputTextChange = (value: string) => {
    store.searchStore.query = value
    debounceInput(value)
  }

  const authenticate = () => {
    const redirectionURL =
      'https://accounts.spotify.com/authorize?' +
      'client_id=4b10d69fa7f74ab6926bbe83d61a4dd8&' +
      'response_type=code&' +
      'redirect_uri=expaa9db9daf96147c3bcb981e6b2d26228://z3-gb7.louiebert.rn-fiddling.exp.direct/+/callback/'
    Expo.WebBrowser.openBrowserAsync(redirectionURL)
  }

  return (
    <Container>
      <SearchInput
        value={store.searchStore.query}
        onChangeText={onInputTextChange}
        placeholder="Search..."
      />
      {store.searchStore.tracks &&
        <FlatList
          data={store.searchStore.tracks}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) =>
            <ListItem
              imageURL={item.album.images[0].url && item.album.images[0].url}
              text={item.name}
            />}
        />}

      <Button title="Auth" onPress={authenticate} />
    </Container>
  )
}

{
  /* <Text>Hello, Navigation!</Text>
      <Button
        onPress={() => props.navigation.navigate('Chat', {user: 'Lucy'})}
        title="Chat with Lucy"
      /> */
}

export default observer(HomeScreen)
