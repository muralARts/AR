import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Header = () => {
  return (
    <View>
      <Text style={styles.titleText}>muralARts</Text>
    </View>
  )
}

var styles = StyleSheet.create({
  titleText: {
    paddingTop: 20,
    paddingBottom: 20,
    color:'#425675',
    textAlign:'center',
    fontSize : 35
  },
})

module.exports = Header
