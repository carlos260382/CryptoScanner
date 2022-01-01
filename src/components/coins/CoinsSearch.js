import React, { Component } from "react";
import { View, StyleSheet, Platform, TextInput } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../resourse/colors";

class CoinsSearch extends Component {

state = {
    query: ''
};

handleText = (query)=>{
this.setState({query})

if(this.props.onChange){
    this.props.onChange(query)

}};

render() {
const {query} = this.state;

return (

<View>
 <TextInput
 style = {style.textInput
// Platform.OS == 'ios' ?
// style.textInputIos
// : style.textInputAndroid
}

 onChangeText={this.handleText}
 value = {query}
 placeholder = "Search Coin"
 placeholderTextColor= '#fff'

 />
</View>
)
}
 };

const style = StyleSheet.create ({
textInput: {
height: 46,
backgroundColor: colors.charade,
paddingLeft: 16,
color: '#fff',
borderBottomWidth: 2,
borderBottomColor: colors.zircon,
fontSize: 16
},
// textInputAndroid:{
// borderBottomWidth: 2,
// borderBottomColor: colors.zircon,
// },
// textInputIos:{
//     margin: 8,
//     borderRadius: 8,
// }

})

export default CoinsSearch;
