import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import {gettingAllExhibits} from '../../store/reducers/allExhibits'
import {gettingSingleExhibit} from '../../store/reducers/singleExhibit'


class Exhibitions extends Component {

  componentDidMount() {
    this.props.gettingAllExhibits()
  }

  selectExhibitAndRedirect(exhibitName) {
    this.props.gettingSingleExhibit(exhibitName)
    this.props.navigate('MAP')
  }

  render() {
    //remove if statement and see if it works since we're mapping below in return stmt
    if (this.props.allExhibits) {
      const allExhibits = this.props.allExhibits

      return (
        <View style={localStyles.Container}>
          {allExhibits.map(exhibit => {
            const {exhibitName, navImage} = exhibit
            return (
              <TouchableHighlight style={localStyles.Exhibit} onPress={this.selectExhibitAndRedirect({exhibitName})} underlayColor={'#d3d3d3'}>
                <Image source={navImage} style={localStyles.ExhibitImage} />
                <Text style={localStyles.ExhibitName} >{exhibitName}</Text>
              </TouchableHighlight>
            )
          })}
        </View>
      )

    } else {
      return <View>HAYYYYLLLLPPPP</View>
    }
  }
}


const localStyles = StyleSheet.create({
  Container: {

  },
  Exhibit: {

  },
  ExhibitImage: {

  },
  ExhibitName: {

  }
})

const mapStateToProps = (state) => {
  return {
    allExhibits: state.allExhibitsReducer.exhibits
  }
}

const mapDispatchToProps = (dispatch) => ({
  gettingAllExhibits: () => dispatch(gettingAllExhibits()),
  gettingSingleExhibit: (exhibitName) => dispatch(gettingSingleExhibit(exhibitName))
})

const ConnectExhibitions = connect(mapStateToProps, mapDispatchToProps)(Exhibitions)

export default ConnectExhibitions;
