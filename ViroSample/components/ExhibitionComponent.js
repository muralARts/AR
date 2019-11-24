import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ExhibitComponent extends Component {
  render() {
    return (
      <View style={styles.exhibitsList}>
        {this.props.exhibits.map((exhibit, index) => {
          return (
            <View key={index}>
              <Text style={styles.exhibitText}>{exhibit.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  exhibitsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  exhibitText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
