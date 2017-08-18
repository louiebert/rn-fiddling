import * as React from 'react'

import {Container, Input} from './StyledComponents'

type Props = {
  value: string
  placeholder?: string
  onChangeText: (text: string) => void
}

const SearchInput: React.StatelessComponent<Props> = props =>
  <Container>
    <Input {...props} />
  </Container>

export default SearchInput
