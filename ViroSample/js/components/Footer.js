import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity} from 'react-native'

export const FooterNav = () => {
  return (
    <View style={styles.footerImage}>
      <View>
      <TouchableOpacity activeOpacity={0.5}>
        <Image source={require('../res/icons/placeholder.png')}></Image>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.5}>
        <Image source={require('../res/icons/home.png')}></Image>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.5}>
        <Image source={require('../res/icons/magnifying-glass.png')}></Image>
      </TouchableOpacity>
      </View>
    </View>
  )
}
var styles = StyleSheet.create({
  footerImage:{
    flex: 1,
    flexDirection: 'row'
  }
})

module.exports = FooterNav
