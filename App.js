import App from './src/App.view.js'
import React from 'react'
import Track from './src/Track.js'

export default class AppLogic extends React.Component {
  state = {
    isOn: false,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isOn: !this.state.isOn })
    }, 1000)
  }

  render() {
    return (
      <Track id="UA-113301963-1">
        <App isOn={this.state.isOn} onClick={() => console.log('click me')} />
      </Track>
    )
  }
}
