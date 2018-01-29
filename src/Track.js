import { Analytics, Event } from 'expo-analytics'
import React from 'react'
import PropTypes from 'prop-types'

export default class Track extends React.Component {
  constructor(props) {
    super(props)
    this.analytics = new Analytics(this.props.id)
  }

  getChildContext() {
    return {
      track: this.track,
    }
  }

  track = ({ block, action }) => {
    console.log('track', block, action)
    this.analytics.event(new Event(block, action))
  }

  render() {
    return this.props.children
  }
}

Track.childContextTypes = {
  track: PropTypes.func,
}
