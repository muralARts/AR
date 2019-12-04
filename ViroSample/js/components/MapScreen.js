import React, { Component } from 'react'
import {StyleSheet, View, Image} from 'react-native'

export default class MapScreen extends Component {
  render() {
    return(
   <View style={localStyles.viroContainer}>
    <View style={localStyles.backgroundContainer}>
     <Image source={require('../res/listPlaceholder2.png')} style={localStyles.backgroundImage} style={{width: '100%', height: '100%'}}/>
    </View>
   </View>
    )}
}

let localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "#fff",
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

  }
});

module.exports = MapScreen;
