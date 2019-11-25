import React from 'react'
// import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-ionicons'
import Home from './Home'
import Explorer from './Explorer'
import MapScreen from './MapScreen'

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// })

const HomeStack = createStackNavigator(
  {
    Home: Home,
  }
  // },
  // config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  IconBar: () => (
    <View>
      <ion-icon name="home"></ion-icon>" />
      <Icon ios="ios-add" android="md-add" />
    </View>
  )
};

HomeStack.path = '';

const MapStack = createStackNavigator(
  {
    Map: MapScreen,
  }
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  IconBar: () => (
    <View>
      <ion-icon name="navigate"></ion-icon>" />
      <Icon ios="ios-add" android="md-add" />
    </View>
  )
};

MapStack.path = '';

const ExplorerStack = createStackNavigator(
  {
    Explorer: Explorer,
  }
);

ExplorerStack.navigationOptions = {
  tabBarLabel: 'Explorer',
  IconBar: () => (
    <View>
      <ion-icon name="search"></ion-icon>" />
      <Icon ios="ios-add" android="md-add" />
    </View>
  )
};

ExplorerStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MapStack,
  ExplorerStack,
});

tabNavigator.path = '';

export default tabNavigator;
