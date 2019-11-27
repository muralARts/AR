import React from 'react';
import {Alert} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

class MapScreen extends React.Component {

  constructor(props) {
    super(props);

    this.mapOptions = Object.keys(MapboxGL.StyleURL)
      .map(key => {
        return {
          label: key,
          data: MapboxGL.StyleURL[key],
        };
      })

    this.state = {
      styleURL: this.mapOptions[0].data,
    };

    this.onMapChange = this.onMapChange.bind(this);
    this.onUserMarkerPress = this.onUserMarkerPress.bind(this);
  }

  componentDidMount() {
    MapboxGL.locationManager.start();
  }

  componentWillUnmount() {
    MapboxGL.locationManager.dispose();
  }

  onMapChange(index, styleURL) {
    this.setState({styleURL});
  }

  onUserMarkerPress() {
    Alert.alert('You pressed on the user location annotation');
  }

  render() {
    return (
      <View>
        {/* // {...this.props}
        // scrollable
        // options={this.mapOptions}
        // onOptionPress={this.onMapChange} */}

        <MapboxGL.MapView
          styleURL={this.state.styleURL}
        >
          <MapboxGL.Camera followZoomLevel={12} followUserLocation />

          <MapboxGL.UserLocation onPress={this.onUserMarkerPress} />
        </MapboxGL.MapView>
      </View>
    );
  }
}

export default MapScreen;

// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import { MapboxGL, MapView } from "@react-native-mapbox-gl/maps";

// MapboxGL.setAccessToken("pk.eyJ1Ijoid2luZHlzZW5nIiwiYSI6ImNrMTZuZjdrYTE3Z2szZG8zNDRwcWJzaTgifQ.bnYsOnjYVA5uY2wnKVB2Kw");

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   container: {
//     height: 300,
//     width: 300,
//     backgroundColor: "tomato"
//   },
//   map: {
//     flex: 1,
//   }
// });

// export default class MapScreen extends Component {
//   componentDidMount() {
//     MapboxGL.setTelemetryEnabled(false);
//   }

//   render() {
//     return (
//       <View style={styles.page}>
//         <View style={styles.container}>
//           <MapboxGL.MapView styleURL={"mapbox://styles/mapbox/streets/v-10"}/>
//         </View>
//       </View>
//     );
//   }
// }

