'use strict';

import React, { Component } from 'react';

import {Alert, Button, StyleSheet} from 'react-native';

import { Provider } from "react-redux";
import { FirebaseWrapper } from "./firebase/firebase";
import { firebaseConfig } from "./firebaseConfig";

import {
  ViroARScene,
  ViroButton,
  ViroText,
  ViroConstants,
} from 'react-viro';

const UNSET = "UNSET";
const instructions = "instructions";
const defaultNavigator = UNSET;

export default class muralARts extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing muralARts...",
      nextPage: defaultNavigator,
      sharedProps: sharedProps,
      loaded: false
    };

    // bind 'this' to functions
    this.showPage = this.showPage.bind(this);
    this.navigateToNext = this.navigateToNext.bind(this);
    this.changeNavigationDirection = this.changeNavigationDirection.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  imageLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    if (this.state.nextPage == UNSET) {
      return this.showPage();
    } else if (this.state.nextPage == instructions) {
      return this.navigateToNext();
    }
  }
    // return (
    //   <ViroARScene onTrackingUpdated={this._onInitialized} >
    //     <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
    //     <ViroButton
    //       source={require('./res/button.jpeg')}
    //       // gazeSource={require("./res/button_on_gazing.jpg")}
    //       // tapSource={require("./res/button_on_tap_pressed.jpg")}
    //       position={[1, 3, -5]}
    //       height={2}
    //       width={3}
    //       // onTap={this._onButtonTap}
    //       // onGaze={this._onButtonGaze}
    //       />
    //   </ViroARScene>
    // );

//   _onInitialized(state, reason) {
//     if (state == ViroConstants.TRACKING_NORMAL) {
//       this.setState({
//         text : "Grace Hopper at Fullstack Academy",
//         text : "Wall St"
//       });
//     } else if (state == ViroConstants.TRACKING_NONE) {
//       // Handle loss of tracking
//     }
//   }
// }

showPage() {
  FirebaseWrapper.GetInstance().Initialize(firebaseConfig);
  return (
    // <Provider store={store}>
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          {this.state.loaded ? (
            <View>
              <Text
                style={{
                  fontFamily: "Helvetica Neue",
                  color: "white",
                  textAlign: "center",
                  fontSize: 50
                }}
              >
                muralARts
              </Text>
              <View style={{ width: 300 }}>
                <Text style={localStyles.titleText}>
                re imagining the space we’re in with unbound creativity
                </Text>
                <Button
                title="Explore Exhibitions  >"
                onPress={() => Alert.alert('coming soon')} />
              </View>
              <View
                style={{
                  alignItems: "center"
                }}
              />
            </View>
          ) : (
            <View>
              <Text style={localStyles.loadingText}>Loading...</Text>
            </View>
          )}
          <Image
            style={{ width: 300, height: 333 }}
            source={require('./js/res/biggie.jpg')}
            onLoadEnd={this.imageLoaded}
          />
          {this.state.loaded ? (
            <TouchableHighlight
              style={localStyles.buttons}
              onPress={this.changeNavigationDirection(instructions)}
              underlayColor={"#68a0ff"}
            >
              <Text style={localStyles.buttonText}>START</Text>
            </TouchableHighlight>
          ) : null}
        </View>
      </View>
    // </Provider>
  );
}
}

// var styles = StyleSheet.create({
//   titleText: {
//     fontFamily: 'Helvetica Neue',
//     fontSize: 30,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
// });

const localStyles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    textAlign: "center"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    textAlign: "center"
  },
  image: {
    marginTop: 50
  },
  titleText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#fff",
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "justify"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  levelText: {
    color: "green",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#4AC7CB",
    borderRadius: 10
  },
  buttonGreen: {
    height: 60,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "green",
    borderRadius: 10
  },
  levels: {
    flexDirection: "row",
    alignContent: "space-around",
    marginRight: 10,
    marginLeft: 10
  },
  levelButton: {
    height: 40,
    width: 100
  },
  clickedLevelButton: {
    height: 40,
    width: 100,
    color: "#4AC7CB"
  }
});


module.exports = muralARts;
