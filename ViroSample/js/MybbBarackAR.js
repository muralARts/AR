'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroARImageMarker,
  ViroBox,
  ViroText,
  ViroImage,
  ViroConstants,
  ViroARTrackingTargets,
} from 'react-viro';

export default class MybbBarackAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);

    ViroARTrackingTargets.createTargets({
      'we_strive': {
        source: require('./res/we_strive.jpg'),
        orientation: "Right",
        physicalWidth: 0.1 // real world width in meters
      },
     });
  }

  render() {
    return (
    //   <ViroARScene onTrackingUpdated={this._onInitialized} >
    //   <ViroImage source={require('./res/obama.png')} />
    // </ViroARScene>
    <ViroARScene>
      <ViroARImageMarker target={'we_strive'} >
      <ViroImage source={require('./res/obama.png')} />
    </ViroARImageMarker>
    </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "We miss you!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = MybbBarackAR;
