// @view
import Hyperlink from 'react-native-hyperlink'
import React from 'react'

const HyperlinkBlock = props => (
  <Hyperlink linkDefault linkStyle={props}>
    {props.children}
  </Hyperlink>
)
export default HyperlinkBlock
