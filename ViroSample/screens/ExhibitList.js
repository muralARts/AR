import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExhibitComponent from '../components/ExhibitComponent';

import { db } from '../firebase/firebaseConfig';

let itemsRef = db.ref('/exhibits');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
});

export default class ExhibitList extends Component {
  state = {
    exhibits: [],
  };

  componentDidMount() {
    itemsRef.on('value', exhibit => {
      let data = exhibit.val();
      let exhibits = Object.values(data);
      this.setState({ exhibits });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.exhibits.length > 0 ? (
          <ExhibitComponent exhibits={this.state.exhibits} />
        ) : (
          <Text>No exhibits</Text>
        )}
      </View>
    );
  }
}
