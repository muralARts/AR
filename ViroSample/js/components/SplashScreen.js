import React, { Component } from "react"
import { View, Image } from "react-native"
import { styles } from "../MybbBarackAR"

export default class SplashScreen extends Component {

  render() {
    const viewStyles = [styles.helloWorldTextStyle, { backgroundColor: 'white' }];
    return (
    <View style={viewStyles}>
        <Image source={require('../res/biggie.jpg')}  style={{width: '100%', height: '100%'}}/>
    </View>
    );
  }
}
