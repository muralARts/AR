// import React, { Component } from "react";
// // import {DropDown} from 'react-native-dropdown'

// // const DropDown = require('react-native-dropdown');
// const {
//   Select,
//   Option,
//   OptionList,
//   updatePosition
// } = DropDown;


// export default class Borough extends Component {
//   constructor() {
//     super()

//     this.state = {
//       borough: ''
//     }
//     this.getOptionList = this.getOptionList.bind(this)
//     this.nyc = this.nyc.bind(this)
//   }

//   componentDidMount() {
//     updatePosition(this.refs['SELECT1']);
//     updatePosition(this.refs['OPTIONLIST']);
//   }

//   getOptionList() {
//     return this.refs['OPTIONLIST'];
//   }

//   nyc(borough) {
// 	  this.setState({
//       ...this.state,
//       nyc: borough
//     });
//   }

//   render() {
//     return(
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Select
//         width={250}
//         ref="SELECT1"
//         optionListRef={this.getOptionList.bind(this)}
//         defaultValue="Select a Borough in NYC ..."
//         onSelect={this.nyc.bind(this)}>
//         <Option>Brooklyn</Option>
//         <Option>Bronx</Option>
//         <Option>Manhattan</Option>
//         <Option>Queens</Option>
//         <Option>Staten Island</Option>
//       </Select>

//       <Text>Selected Borough of NYC: {this.state.nyc}</Text>

//       <OptionList ref="OPTIONLIST"/>
//   </View>
//   )}
// }
// module.exports = Borough;
