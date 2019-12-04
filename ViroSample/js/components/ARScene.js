'use strict'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {StyleSheet} from 'react-native'
import {
  ViroARScene,
  ViroConstants,
  ViroText,
  ViroImage,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroNode,
} from 'react-viro'

const dummyData = [{
  target:{
  orientation: "Up",
  physicalWidth: "0.1",
  targetImage: "PLACEHOLDER"
  },
  source:{
    imageMarker: ''
  }
}]

export class ARScene extends Component {

 state = {
    isTracking: false,
    initialized: false,
    paused: false
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

  onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }

  onAnchorFound = (state) => {
    this.setState({
      isTracking: false,
      initialized: true,
      paused: true,
    })
  }

  getARScene() {
    return (
      <ViroNode>
        <ViroARImageMarker target={'strive'}
         onAnchorFound={this.onAnchorFound}>
          <ViroImage
            height={0.20}
            width={0.15}
            position={[0,0,0]}
            rotation={[-90,0,0]}
            style={styles.image}
            source={require('../res/collection/obama.png')}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={'strive'}
         onAnchorFound={this.onAnchorFound}>
          <ViroImage
            height={0.20}
            width={0.15}
            position={[0,0,0]}
            rotation={[-90,0,0]}
            style={styles.image}
            source={require('../res/collection/obama.png')}
          />
        </ViroARImageMarker>
      </ViroNode>
    )
  }
    createTargets(){

     ViroARTrackingTargets.createTargets({
        'strive': {
          source: require('../res/targets/strive.png'),
          orientation: "Up",
          physicalWidth: 0.1
        },
       });
      }
  render() {
   this.createTargets()
   //if (this.props.exhibit.length) {console.error('props ', this.props)}
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized} >
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene() }
      </ViroARScene>
    );
  }
}

// ViroARTrackingTargets.createTargets({
//   'strive': {
//     source: require('../res/targets/strive.png'),
//     orientation: "Up",
//     physicalWidth: 0.1
//   },
//  });

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
//module.exports = ARScene

const mapStateToProps = (state) => {
  return {
    exhibit: state.singleExhibitReducer.exhibit
  }
}

const ConnectedARScene = connect(mapStateToProps, null)(ARScene)

export default ConnectedARScene
