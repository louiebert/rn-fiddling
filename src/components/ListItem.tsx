import * as React from 'react'
import styled from 'styled-components/native'

type Props = {
  imageURL?: string
  text: string
}

const ListItem: React.StatelessComponent<Props> = props =>
  <StyledLI>
    {props.imageURL && <Image source={{uri: props.imageURL}} />}
    <Text>
      {props.text}
    </Text>
  </StyledLI>

const rowHeight = 30

const StyledLI = styled.View`height: ${rowHeight};`

const Image = styled.Image`
  width: ${rowHeight - 5};
  height: ${rowHeight - 5};
`

const Text = styled.Text`
  position: absolute;
  left: ${rowHeight + 10};
  line-height: ${rowHeight};
`

export default ListItem
