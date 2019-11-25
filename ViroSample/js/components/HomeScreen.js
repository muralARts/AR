"use strict";

import React, { Component } from "react";
import { StyleSheet } from "react-native";


import {
  ViroARScene,
  ViroConstants,
  ViroAmbientLight,
  ViroSpotLight
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this._onInitialized = this._onInitialized.bind(this);
    this._render3DObj = this._render3DObj.bind(this);
    this._defaultView = this._defaultView.bind(this);
  }
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  _render3DObj() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={"#ffffff"} />

        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
        <ViroImage source={require('../res/collection/obama.png')} position={[0,0,0]} rotation={[-90,0,0]}/>
      </ViroARScene>
    )
  }

  _defaultView() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={"#aaaaaa"} />
      </ViroARScene>
    );
  }

  render() {
    if (this.props.products.length > 0) {
      return this._render3DObj();
    } else {
      return this._defaultView();
    }
  }
}

module.exports = HelloWorldSceneAR;
