import React, { Component } from 'react'
import {View, Image} from 'react-native'

export default class MapScreen extends Component {
  render() {
    return(
   <View>
     <Image source={require('../res/map.png')} />
     </View>
    )}
}
module.exports = MapScreen;
