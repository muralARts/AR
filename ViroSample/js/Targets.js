
import {
  ViroARTrackingTargets,
  ViroBox,
  ViroImage,
  ViroARImageMarker,
} from 'react-viro';

  // Register the target
  ViroARTrackingTargets.createTargets({
    'hydroflask': {
      source: require('../js/res/targets/hydroflask.jpg'),
      orientation: "Up",
      physicalWidth: 0.1 // real world width in meters
    },
   });

  // <ViroARImageMarker target={'striveTarget'} >
  //   <ViroBox position={[0, 0, -1]} scale={[0, 0, 0]} rotation={[-90,0,0]}/>
  //   <ViroImage source={require('./res/collection/obama.png')} />
  // </ViroARImageMarker>
