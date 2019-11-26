import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Header = () => {
  return (
    <View style={styles.logo}>
      <Text style={styles.titleText}>mural</Text>
      <Text style={styles.ARText}>AR</Text>
      <Text style={styles.titleText}>ts</Text>
    </View>
  )
}

var styles = StyleSheet.create({
  logo:{
    flex: 1,
    flexDirection: 'row'
  },
  titleText: {
    paddingTop: 25,
    paddingBottom: 15,
    color:'#425675',
    textAlign:'center',
    fontSize : 33
  },
  ARText: {
    paddingTop: 25,
    paddingBottom: 15,
    color:'#fff',
    textAlign:'center',
    fontSize : 33
  }
})

module.exports = Header
