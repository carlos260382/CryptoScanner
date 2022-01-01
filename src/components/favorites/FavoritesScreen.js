import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import FavoritesEmptyState from './FavoritesEmptyState';
import colors from '../../resourse/colors';
//import { color } from 'react-native-reanimated';



class FavoritesScreen extends Component {
render (){
return (
<View style = {styles.container }>
    <FavoritesEmptyState/>
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