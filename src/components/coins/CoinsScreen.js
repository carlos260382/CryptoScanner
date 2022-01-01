import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import Http from '../../libs/http'; 
import CoinsItems from './CoinsItems';
import colors from "../../resourse/colors";
import CoinsSearch from './CoinsSearch' 


class CoinsScreen extends Component {

state = {
coins : [],
allCoins : []
}

componentDidMount = ()=>{
    this.getCoins()
}

getCoins = async () => {

    this.setState( { loading: true } );
    
    const res = await Http.instance.get('https://api.coinlore.net/api/tickers/') 
    //console.log('coins', coins) 
    this.setState({ coins: res.data, allCoins:res.data, loading:false });

};


handlePress = (coin) =>{
    this.props.navigation.navigate('CoinsDetail', {coin}) 
}

handleSearch=(query)=>{
const {allCoins} = this.state;

const coinsFiltered = allCoins.filter((coin)=>{
return coin.name.toLowerCase().includes(query.toLowerCase()) ||
       coin.symbol.toLowerCase().includes(query.toLowerCase());
})
this.setState( { coins: coinsFiltered} )
console.log('este es filtrado', coinsFiltered)
};

render () {
    const { coins, loading } = this.state;


return (
<View style = {style.container}>
<CoinsSearch onChange={ this.handleSearch}  /> 

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