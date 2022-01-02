import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import CoinsItems from '../coins/CoinsItems';
import FavoritesEmptyState from './FavoritesEmptyState';
import colors from '../../resourse/colors';
import Storages from '../../libs/Storages';
//import { color } from 'react-native-reanimated';



class FavoritesScreen extends Component {

state={
    favorites:[]
}

getFavorites = async()=>{

    try {
        const allKeys = await Storages.instance.getAllKeys();
        const keys = allKeys.filter((key)=> key.includes("favorite-"))
        const favs = await Storages.instance.multiGet(keys)
        const favorites = favs.map((fav)=> JSON.parse(fav[1]))

        console.log ('este es favorites', favorites);

        this.setState({favorites})

    } catch (err) {
        console.log('Error de Get Favorites',err);
    }

}

handlePress=()=>{
this.props.navigation.navigate("CoinsDetail", {coin});
}

componentDidMount(){

this.props.navigation.addListener('focus', this.getFavorites)

} 

componentWillUnmount(){
this.props.navigation.removeListener('focus', this.getFavorites)

}

render (){
const {favorites} = this.state;

return (
<View style = {styles.container }>
    {favorites.length == 0 ?
        <FavoritesEmptyState/>
        : null
    }
{favorites.length > 0 ?
<FlatList 
data={favorites}
renderItem={({item})=> 
<CoinsItems 
item={item} 
onPress={()=> this.handlePress(item) } />
}
/>
: null
}


</View>
    
);
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade,
       },
   });


export default FavoritesScreen;