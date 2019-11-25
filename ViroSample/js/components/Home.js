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
/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}
// Sets the default scene you want for AR and VR
// var InitialARScene = require('./Explorer')
export default class Home extends Component {
  render() {
    return (
      <View style={localStyles.viroContainer}>
          <View style={localStyles.backgroundContainer}>
          <Text style={localStyles.titleText}>muralARts</Text>
          <ImageBackground source={require('../res/collection/biggie.jpg')} style={localStyles.backgroundImage} style={{width: '100%', height: '100%'}} style = {localStyles.backdrop}/>
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
module.exports = Home
