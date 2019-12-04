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
// var sharedProps = {
//   apiKey:"API_KEY_HERE",
// }
// Sets the default scene you want for AR and VR
// var InitialARScene = require('./Explorer')

export default class Home extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const onPress=this.props.onPressFunc
    return (
      <View style={localStyles.viroContainer}>
          <View style={localStyles.backgroundContainer}>
          <Text style={localStyles.catchphraseText}>
          re imagining the space we’re in with unbound creativity
          </Text>
          <ImageBackground source={require('../res/collection/biggie3.png')} style={localStyles.backgroundImage} style={{width: '100%', height: '100%'}} style = {localStyles.backdrop}/>

          <TouchableHighlight style={localStyles.buttons} onPress={()=>onPress('EXHIBITIONS')} underlayColor={'#d3d3d3'}>
            <Text style={localStyles.buttonText} > Explore Exhibitions                >
            </Text>
          </TouchableHighlight>
          {/* <TouchableHighlight style={localStyles.buttons}
            onPress={()=>onPress('BOROUGH')}
            underlayColor={'#d3d3d3'} >
            <Text style={localStyles.buttonText}>Browse by Borough  ></Text>
          </TouchableHighlight> */}
          </View>
      </View>
    );
  }
}
var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "#fff",
  },
  titleText: {
      paddingTop: 25,
      paddingBottom: 8,
      color:'#425675',
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
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  catchphraseText: {
    paddingTop: 10,
    paddingBottom: 20,
    color: 'black',
    textAlign:'center',
    fontSize: 20,
    fontStyle: 'italic'
  },
  buttonText: {
    color:'#425675',
    textAlign:'center',
    fontSize : 20
  },
  buttons: {
    alignContent: 'center',
    alignSelf: 'center',
    height: 50,
    width: 350,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 20,
    marginLeft:30,
    marginRight: 30,
    backgroundColor:'#d3d3d3',
    borderWidth: 1,
    borderColor: '#425675',
  }
});
module.exports = Home
