import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import {gettingAllExhibits} from '../../store/reducers/allExhibits'
import {gettingSingleExhibit} from '../../store/reducers/singleExhibit'


class Exhibitions extends Component {
  constructor () {
    super ()
    this.selectExhibitAndRedirect= this.selectExhibitAndRedirect.bind(this)
  }

  componentDidMount() {
    this.props.gettingAllExhibits()
    //console.error('this.props: ',this.props)
  }

  async selectExhibitAndRedirect(exhibitName) {
    await this.props.gettingSingleExhibit(exhibitName)
    this.props.navigate('EXPLORER')
    // console.error('thispropsexhibit', this.props.exhibit)
  }

  render() {
    //remove if statement and see if it works since we're mapping below in return stmt
    if (this.props.exhibits) {
      //console.error('this.props: ',this.props)
      const allExhibits = this.props.exhibits

      return (
        <View>
          {allExhibits.map(exhibit => {
            const {exhibitName, navImage} = exhibit
            const exhibitNameStr = exhibitName.toString()

            return (
              <View key={exhibitName}>
                <TouchableOpacity onPress={()=>this.selectExhibitAndRedirect(exhibitNameStr)} underlayColor={'#d3d3d3'}>
                  <View style={localStyles.Container}>
                  <Image source={{uri: navImage}} style={{width: 150, height: 150}}/>
                  <Text>{exhibitName}</Text>
                  <Text>Location: 25th Floor</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      )

    } else {
      return <View><Text>HAYYYYLLLLPPPP</Text></View>
    }
  }
}

//  onPress={this.selectExhibitAndRedirect({exhibitName})}
const localStyles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    color: '#000000',
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
    exhibits: state.allExhibitsReducer.exhibits,
    exhibit: state.singleExhibitReducer.exhibit
  }
}

const mapDispatchToProps = (dispatch) => ({
  gettingAllExhibits: () => dispatch(gettingAllExhibits()),
  gettingSingleExhibit: (exhibitName) => dispatch(gettingSingleExhibit(exhibitName))
})

const ConnectExhibitions = connect(mapStateToProps, mapDispatchToProps)(Exhibitions)

export default ConnectExhibitions;
