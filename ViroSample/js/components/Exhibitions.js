import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
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
        <View style={localStyles.container}>
          <ScrollView>
          {allExhibits.map(exhibit => {
            const {exhibitName, navImage} = exhibit
            const exhibitNameStr = exhibitName.toString()

            return (
              <View style={localStyles.exhibit} key={exhibitName}>
                <TouchableOpacity onPress={()=>this.selectExhibitAndRedirect(exhibitNameStr)} underlayColor={'#d3d3d3'}>
                  <View >
                  <Image source={{uri: navImage}} style={localStyles.exhibitImage}/>
                  <Text style={localStyles.exhibitName}>{exhibitName}</Text>
                  <Text style={localStyles.locationName}>Location: 25th Floor</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })}
          </ScrollView>
        </View>
      )

    } else {
      return <View><Text>HAYYYYLLLLPPPP</Text></View>
    }
  }
}

//  onPress={this.selectExhibitAndRedirect({exhibitName})}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000000',
    width: '100%',
    height: '100%'
  },
  exhibit: {
    height: 180,
    width: '100%',
    //paddingBottom: 20,
    marginBottom: 30
  },
  exhibitImage: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    height: 200,
    //alignSelf: 'stretch'
    // paddingTop: 10,
    // paddingBottom: 10,
    // resizeMode: 'cover'
  },
  exhibitName: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 21,
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    position: 'absolute',
    top: 8,
    left: 16,
    justifyContent: 'center'
  },
  locationName:{
    position: 'absolute',
    top: 40,
    left: 16,
    color: '#fff'
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
