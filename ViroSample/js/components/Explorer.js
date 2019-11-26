'use strict'
import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native'
import {
  ViroARScene,
  ViroConstants,
  ViroText,
  ViroARSceneNavigator,
  ViroARImageMarker,
} from 'react-viro'

import ARScene from './ARScene'

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
    const { isTracking, initialized } = this.state;
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
        initialScene={{scene: ARScene}} />
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
