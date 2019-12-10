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


export class ARScene extends Component {
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
        {this.props.exhibit.map(exhibit=>{
          // console.error('exhibit.target.targetImage', exhibit.target.targetImage)
          return (
            <ViroARImageMarker key={exhibit.target.targetImage} target={exhibit.target.targetImage}
            onAnchorFound={this.onAnchorFound}>
              <ViroImage
                height={0.30}
                width={0.30}
                position={[0,0,0]}
                rotation={[-90,0,0]}
                style={styles.image}
                source={{uri: exhibit.source}}
              />
            </ViroARImageMarker>
          )
        })}
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
}

ViroARTrackingTargets.createTargets({
  'tape': {
    source: require('../res/targets/tape.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'GH':{
    source: require('../res/targets/GH.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'strive': {
    source: require('../res/targets/strive.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'fire':{
    source: require('../res/targets/fire.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'staff':{
    source: require('../res/targets/staff.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'trust':{
    source: require('../res/targets/trust.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  '45':{
    source: require('../res/targets/45.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'subway':{
    source: require('../res/targets/subway.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'federal':{
    source: require('../res/targets/federal.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  },
  'hydrant':{
    source: require('../res/targets/hydrant.jpg'),
    orientation: "Up",
    physicalWidth: 0.1
  }
  // 'fullstack':{
  //   source: require('../res/targets/fullstack.png'),
  //   orientation: "Up",
  //   physicalWidth: 0.1
  // }
 })

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

// export default ConnectedARScene
module.exports = ConnectedARScene
