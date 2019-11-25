'use strict'
import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from 'react-viro'
export class Explorer extends Component {
constructor(){
  super()
 this.state = {
    isTracking: false,
    initialized: false,
    paused: false
  }
  this.onInitialized = this.onInitialized.bind(this)
  this.onAnchorFound = this.onAnchorFound.bind(this)
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
  getARScene() {
    return (
      <ViroNode>
        <ViroARImageMarker target={'striveTarget'}
         onAnchorFound={this.onAnchorFound}>
                  <ViroImage
                    height={0.20}
                    width={0.15}
                    style={styles.image}
                    source={require('../res/collection/obama.png')}
                  />
        </ViroARImageMarker>
      </ViroNode>
    )
  }
  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized} >
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene() }
      </ViroARScene>
    );
  }
  onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }
  onAnchorFound = (state) => {
    this.setState({
      isTracking: true,
      initialized: true,
      paused: true,
    })
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
