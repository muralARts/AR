
import React, { Component } from 'react';

import {
  ViroARTrackingTargets,
  ViroBox,
  ViroImage,
  ViroARImageMarker,
} from 'react-viro';

  // Register the target
  ViroARTrackingTargets.createTargets({
    'we_striveTarget': {
      source: require('./res/strive.png'),
      orientation: "Up",
      physicalWidth: 0.1 // real world width in meters
    },
   });

  <ViroARImageMarker target={'we_striveTarget'} >
    <ViroBox position={[0, -.1, 0]} scale={[0, 0, 0]} rotation={[0, 0, 90]} dragType='FixedToPlane'/>
    <ViroImage source={require('./res/obama.png')} />
  </ViroARImageMarker>
