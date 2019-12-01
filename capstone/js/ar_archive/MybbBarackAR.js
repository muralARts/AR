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
  ViroNode,
  ViroARTrackingTargets,
  ViroARPlane
} from 'react-viro';

export default class MybbBarackAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      // text : "Initializing AR...",
      plane: [0,0,0],
      paused: false
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._planeSelected = this._planeSelected.bind(this);

    ViroARTrackingTargets.createTargets({
      'strive': {
        source: require('./res/strive.png'),
        orientation: "Up",
        physicalWidth: 0.1 // real world width in meters
      },
     });
  }

  render() {
    return (
    //   <ViroARScene onTrackingUpdated={this._onInitialized} >
    //   <ViroImage source={require('./res/obama.png')} />
    // </ViroARScene>

    //Planes test

    <ViroARScene>
      <ViroNode>
      <ViroARPlane minHeight={.5} minWidth={.5} pauseUpdates={this.state.paused} onPlaneSelected={this._planeSelected}>
      <ViroARImageMarker target={'strive'}
        onAnchorFound={this._onAnchorFound}
        pauseUpdates={this.state.pauseUpdates}>
      <ViroImage source={require('./res/obama.png')} position={[0,0,0]} rotation={[-90,0,0]}/>
      {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} /> */}
      </ViroARImageMarker>
      </ViroARPlane>
      </ViroNode>
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

  _planeSelected(anchor) {
    this.setState({
      paused : true,
    })
  }

  _onAnchorFound() {
    this.setState({
      paused: true,
    })
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
