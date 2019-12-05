'use strict'
import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {
  ViroText,
  ViroARSceneNavigator,
} from 'react-viro'

// import ARScene from './ARScene'
import ConnectedARScene from './ARScene'

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

export class Explorer extends Component {
constructor(){
  super()
 this.state = {
    sharedProps: sharedProps
  }
  this.getARNavigator = this.getARNavigator.bind(this);
}

  getNoTrackingUI(){
    const { initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      }/>
    )
  }

  getARNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
      // <ViroARSceneNavigator {...this.state}
        initialScene={{scene: ConnectedARScene}} />
    );
  }

  render() {
    return (
     this.getARNavigator()
    );
  }
}

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});
module.exports = Explorer
