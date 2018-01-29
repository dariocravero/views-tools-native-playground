import React from 'react'
import { Animated, StyleSheet, Text } from 'react-native'

const getAnimatedValue = (animatedValue, from, to) =>
  animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [from, to],
  })

class Ho extends React.Component {
  animatedValue = new Animated.Value(this.props.isOn ? 1 : 0)

  componentWillReceiveProps(next) {
    const { props } = this
    if (props.isOn !== next.isOn) {
      Animated.spring(this.animatedValue, {
        toValue: next.isOn ? 1 : 0,
        friction: 40,
        tension: 70,
      }).start()
    }
  }

  render() {
    const { props } = this
    return (
      <Animated.Text
        testID={props['testID'] || 'Ho'}
        style={{
          color: getAnimatedValue(this.animatedValue, '#323232', '#ff0000'),
          margin: 50,
          fontSize: getAnimatedValue(this.animatedValue, 18, 28),
        }}
      >
        Type something...
      </Animated.Text>
    )
  }
}

export default Ho
