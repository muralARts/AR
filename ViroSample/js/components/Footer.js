import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity} from 'react-native'

export const FooterNav = (props) => {
  const onPress=props.onPressFunc
  return (
    <View style={styles.footerImage}>
      <View style={styles.iconPadding}>
      <TouchableOpacity onPress={()=>onPress('MAP')} activeOpacity={0.5}>
        <Image style={styles.image} source={require('../res/icons/placeholder.png')}></Image>
      </TouchableOpacity>
      </View>
      <View style={styles.iconPadding}>
      <TouchableOpacity onPress={()=>onPress('HOME')} activeOpacity={0.5}>
        <Image style={styles.image} source={require('../res/icons/home.png')}></Image>
      </TouchableOpacity>
      </View>
      <View style={styles.iconPadding}>
      <TouchableOpacity onPress={()=>onPress('EXPLORER')} activeOpacity={0.5}>
        <Image style={styles.image} source={require('../res/icons/magnifying-glass.png')}></Image>
      </TouchableOpacity>
      </View>
    </View>
  )
}

var styles = StyleSheet.create({
  footerImage:{
    flex: 1,
    flexDirection: 'row',
  },
  iconPadding: {
    paddingLeft: 45,
    paddingRight: 45,
  },
  image: {
    width: 30,
    height: 30
  }
})

module.exports = FooterNav
