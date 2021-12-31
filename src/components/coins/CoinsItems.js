import React from "react";
import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
import Colors from "../../resourse/colors";


const CoinsItems = ({ item, onPress })=>{

var getImgArrow = () =>{
if (Number(item.percent_change_1h) > 0){
return require('../../assets/arrow_up.png') 
}else {
return require('../../assets/arrow_down.png')
 }
}


 return ( 
<Pressable onPress={ onPress } 
style = { style.container }>
<View style = { style.row }>
    <Text style = { style.symbolText }> {item.symbol} </Text>   
    <Text style = { style.nameText }> {item.name} </Text>
    <Text style = { style.priceText }> {`$${item.price_usd}` } </Text>
</View>

<View style = { style.row }>
    <Text style = { style.percentText }> {item.percent_change_1h} </Text>
    <Image 
    style = { style.imgIcon} 
      source={ getImgArrow ()} 
    /> 
</View>


</Pressable>

);

}

const style = StyleSheet.create ({
container : {
flexDirection : "row",
padding: 16,
justifyContent: 'space-between',
borderBottomColor: Colors.zircon,
borderBottomWidth: 1, 
marginLeft: Platform.OS == 'ios'? 16 : 16,
paddingLeft: Platform.OS == 'ios'? 0 : 16
},
row: {
flexDirection: 'row'
},
symbolText :{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12
},
nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 16
},
percentText:{
color: '#fff',
fontSize: 12
},
priceText:{
   color: '#fff',
   fontSize: 14,
   marginRight: 8

},

imgIcon :{
width : 15,
height : 15

}

});

export default CoinsItems;