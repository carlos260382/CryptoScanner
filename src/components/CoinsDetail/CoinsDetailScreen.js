import React, { Component } from "react";
import { View, Image, Pressable, SectionList, Text, FlatList, StyleSheet, Alert} from "react-native";
import Color from '../../resourse/colors.js';
import Http from '../../libs/http.js';
import CoinsMarketItem from '../CoinsDetail/CoinsMarketItem.js';
import Storages from '../../libs/Storages'

class CoinsDetailScreen extends Component {
state = {
    coin:{},
    markets: [],
    isFavorite: false
}

toogleFavorite= ()=>{
    if (this.state.isFavorite){
        this.removeFavorite();
    }else{
        this.addFavorite();
    }
}

addFavorite = async ()=> {
    const coin= JSON.stringify(this.state.coin);
    const key = `favorite-${this.state.coin.id}`;
    const stored = await Storages.instance.store(key, coin);

console.log('este es el stored', stored)

if(stored){
    this.setState({isFavorite : true})
}};

removeFavorite= async ()=> {
Alert.alert('Remove Favorites', 'Are you sure?', [
    {
        text: 'cancel', 
        onPress:()=>{},
        style: 'cancel',
    },
    {
        text: 'remove', 
        onPress: async ()=>{
            const key = `favorite-${this.state.coin.id}`;
            const stored = await Storages.instance.remove(key);
            this.setState({isFavorite : false})
        },
        style: 'destructive',
    }
])
    
};

getFavorite = async ()=>{
    try {
        const key = `favorite-${this.state.coin.id}`;
        const favStr = await Storages.instance.get(key);
        console.log('este es el favStr', favStr)
        if(favStr !== null){
            this.setState({isFavorite: true})
        }

        
    } catch (err) {
        console.log('get favorite error', err)
    }
    

}


getSymbolIcon = (name)=>{
    if(name){
     const name2 = name.toLowerCase().replace(" ", "-");
     return `https://c1.coinlore.com/img/25x25/${name2}.png` 
        
    } 
    //console.log('esta es la imagen', imagen2)
}

getSeptions = (coin)=>{
    const sections = [
    {  
        title: 'Market Cap',
        data: [coin.market_cap_usd]
    }, 
    {
        title: 'volume 24h',
        data: [coin.volume24 ]
    },
    {
        title: 'change 24h',
        data: [coin.percent_change_24h ]

    }
 ]
 
return sections;

}

getMarket = async (coinId)=>{
const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`

const markets = await Http.instance.get(url)

this.setState({markets})
console.log('este es el mercado', markets)
}

componentDidMount(){
const { coin } = this.props.route.params

this.props.navigation.setOptions({ title: coin.symbol } )

this.getMarket(coin.id);

this.setState( { coin }, ()=>{
this.getFavorite();

});
console.log ('este es el coin', coin )
}

render () {
const { coin, markets, isFavorite } = this.state;

return (
<View style= {style.container} >
    <View style = {style.subHeader } >
    <View style = { style.row}>
        <Image style = {style.iconImg}   source={ { uri: this.getSymbolIcon(coin.name)  }  }  />
        <Text  style = {style.titleText}>{coin.name}</Text>
    </View>

<Pressable 
onPress={ this.toogleFavorite }
style = {[
    style.btnFavorites,
    isFavorite?
    style.btnFavoritesRemove : 
    style.btnFavoritesAdd
]} >
    <Text style={style.btnFavoriteText}> { isFavorite? 'Remove Favorite' : 'Add Favorites' }</Text>
</Pressable>

    </View>

<SectionList 
    style = {style.section}
    sections={ this.getSeptions(coin) }  
    keyExtractor={ (item)=> item }
    renderItem={({item})=> 
    <View style = { style.sectionItem}>
        <Text style = { style.itemText}>{item}</Text>
    </View>
    }
    renderSectionHeader={({section})=> 
<View style = { style.sectionHeader}>
    <Text style = { style.sectionTex} >{section.title}</Text>  
</View>
}
/>
<Text style = { style.marketTitle} >Markets</Text>
<FlatList
style = { style.list}
horizontal = {true}
data = {markets}
renderItem={({item})=>  <CoinsMarketItem item={item}  />  }
 />
</View>
)
}
};

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: Color.charade,
    },
    row:{
        flexDirection: 'row'
    },
    subHeader: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        padding: 16, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 8
    },
    iconImg : {
        width: 25,
        height:25
    },
    sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8
    },
    list: {
        maxHeight: 90,
        paddingLeft: 16
    },
    sectionItem: {
        padding: 8
    },
    section: {
    maxHeight: 220
    },
    itemText: {
        color: '#fff',
        fontSize: 14
    },
    sectionTex: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    marketTitle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 16,
        marginLeft:16,
        fontWeight: 'bold'
    },
    btnFavorites: {
        padding: 8,
        borderRadius:8
    },
    btnFavoritesAdd:{
        backgroundColor: Color.picton,
    },
    btnFavoritesRemove:{
        backgroundColor: Color.carmine 
    },
    btnFavoriteText:{
        color: '#fff'
    }

    
 });


export default CoinsDetailScreen;

