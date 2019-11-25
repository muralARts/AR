
import React from 'react';
import { Alert, Button, Platform, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

import MainNavigator from './navigation/MainNavigator';

//CODE FROM REACT NATIVE WITH TABS
export default function App(props) {

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <MainNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
});
