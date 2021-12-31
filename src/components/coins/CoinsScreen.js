import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import Http from '../../libs/http'; 
import CoinsItems from './CoinsItems';
import colors from "../../resourse/colors";


class CoinsScreen extends Component {

state = {
coins : []
}

componentDidMount = async ()=>{
this.setState( { loading: false } );

const res = await Http.instance.get('https://api.coinlore.net/api/tickers/') 
//console.log('coins', coins) 
this.setState({ coins: res.data });
} 


handlePress = (coin) =>{

this.props.navigation.navigate('CoinsDetail', {coin}) 
}

render () {
const { coins, loading } = this.state;


return (
<View style = {style.container}>

{ loading? 
<ActivityIndicator 
stayler= { style.loader }
color = '#fff' size = 'large'/>
: null
 }

<FlatList data={ coins }
renderItem={( {item})=> 
<CoinsItems item = {item} onPress={ ()=> this.handlePress(item) }  />
}
/>
</View>
);
} 
}

const style = StyleSheet.create ({
container : {
    flex : 1,
    backgroundColor: colors.charade

},

textStyle : {
    color: 'blue'
},

btn : {
padding : 8,
backgroundColor:'blue',
borderRadius : 8,
margin : 16 
},
btnText: {
color : '#fff',
textAlign : 'center'
},
loader: {
marginTop : 60
}
})

export default CoinsScreen;