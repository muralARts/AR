/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// commit

import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/Explorer');


var UNSET = "UNSET";
var EXPLORE_NAVIGATOR_TYPE = "Explore Exhibitions";
var COLLECTION_NAVIGATOR_TYPE = "View our Collection";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getExploreNavigator = this._getExploreNavigator.bind(this);
    this._getCollectionNavigator = this._getCollectionNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == COLLECTION_NAVIGATOR_TYPE) {
      return this._getCollectionNavigator();
    } else if (this.state.navigatorType == EXPLORE_NAVIGATOR_TYPE) {
      return this._getExploreNavigator();
    }
  }

  // Presents the user with a choice of an AR experiences
  _getExperienceSelector() {
    return (
      <View style={localStyles.viroContainer}>
          <View style={localStyles.backgroundContainer}>

          <Text style={localStyles.titleText}>muralARts</Text>

          <ImageBackground source={require('./js/res/collection/biggie.jpg')} style={localStyles.backgroundImage} style={{width: '100%', height: '100%'}} style = {localStyles.backdrop}/>

          <Text style={localStyles.catchphraseText}>
          re imagining the space we’re in with unbound creativity
          </Text>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(EXPLORE_NAVIGATOR_TYPE)}
            underlayColor={'#d3d3d3'} >

            <Text style={localStyles.buttonText}>Explore Exhibitions  ></Text>
          </TouchableHighlight>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(COLLECTION_NAVIGATOR_TYPE)}
            underlayColor={'#d3d3d3'} >

            <Text style={localStyles.buttonText}>View our Collection  ></Text>
          </TouchableHighlight>
          </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getExploreNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }

  // Returns the ViroSceneNavigator which will start the VR experience
  _getCollectionNavigator() {
    return (
      <ViroVRSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialVRScene}} onExitViro={this._exitViro}/>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "#d3d3d3",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 35
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundImage:{
    flex: 1,
    // resizeMode: 'cover'
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  catchphraseText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons: {
    alignContent: 'center',
    height: 65,
    width: 250,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor:'#d3d3d3',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#d3d3d3',
    marginHorizontal: 20,
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#FFC0CB',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = App
