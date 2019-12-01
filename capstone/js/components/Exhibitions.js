import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import {gettingAllExhibits} from '../../store/reducers/index'
import {gettingSingleExhibit} from '../../store/reducers/index'


export default class Exhibitions extends Component {

  componentDidMount() {
    this.props.gettingAllExhibits()
  }

  selectExhibitAndRedirect(exhibitName) {
    this.props.gettingSingleExhibit(exhibitName)
    this.props.navigate('MAP')
  }

  render() {
    const allExhibits = this.props.allExhibits
    if (allExhibits.length) {

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
      return <View></View>
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

connect(mapStateToProps, mapDispatchToProps)(Exhibitions)

module.exports = Exhibitions;
