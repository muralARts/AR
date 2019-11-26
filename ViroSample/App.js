/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native';


import {MapScreen, Home, Explorer, Exhibitions, Header, FooterNav} from './js/components/Index'

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}

// Sets the default scene you want for AR
var InitialARScene = require('./js/components/Explorer');

//default navigator
var UNSET = "UNSET";
var defaultNavigatorType = UNSET;

// NAVIGATION HELPER VARIABLES
const HOME = 'HOME'
const MAP = 'MAP'
const EXPLORER = 'EXPLORER'
const EXHIBITIONS = 'EXHIBITIONS'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: HOME
    }
    this.viewMatcher = this.viewMatcher.bind(this)
    this.onPress = this.onPress.bind(this)
}

 viewMatcher(){
  switch (this.state.currentPage) {
    case HOME:
      return <Home />
    case MAP:
      return <MapScreen />
    case EXPLORER:
      return <Explorer />
    case EXHIBITIONS:
      return <Exhibitions />
    default:
      return <Home />
  }
}

  onPress(page) {
    this.setState({...this.state,
      currentPage: page
    })
  }

  render(){
    let currentView = this.viewMatcher()
    return (
      <View style={localStyles.container}>
         <View style={localStyles.header}>
          <Header/>
          </View>
        <View style={localStyles.body}>
          <View style={localStyles.backgroundContainer}>
            {currentView}
          </View>
        </View>
        <View style={localStyles.footer}>
          <FooterNav onPressFunc={this.onPress}/>
        </View>
      </View>
  )
}
}


var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: 'transparent',
  },
  container:{
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center'
  },
  body:{
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    height: 75,
    justifyContent: 'space-evenly',
    padding: 10
  },
  header:{
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    height: 75,
    justifyContent: 'space-evenly',
    color:'#425675',
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
