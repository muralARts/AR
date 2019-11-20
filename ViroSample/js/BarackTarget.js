
import React, { Component } from 'react';

import {
  ViroARTrackingTargets,
  ViroBox,
  ViroARImageMarker,
} from 'react-viro';

  // Register the target
  ViroARTrackingTargets.createTargets({
    'screenTarget': {
      source: require('./res/screen.jpg'),
      orientation: "Up",
      physicalWidth: 0.1 // real world width in meters
    },
   });

  <ViroARImageMarker target={'screenTarget'} >
    <ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]} />
  </ViroARImageMarker>
