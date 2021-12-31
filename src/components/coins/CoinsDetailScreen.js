import React, { Component } from "react";
import { View, Image, SectionList, Text, StyleSheet, } from "react-native";
import Color from '../../resourse/colors.js'

class CoinsDetailScreen extends Component {
state = {
    coin:{}
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

componentDidMount(){
const { coin } = this.props.route.params

this.props.navigation.setOptions({ title: coin.symbol } )

this.setState( { coin })
console.log ('este es el coin', coin )
}

render () {
const { coin } = this.state;

return (
<View style= {style.container} >
    <View style = {style.subHeader } >
    <Image style = {style.iconImg}   source={ { uri: this.getSymbolIcon(coin.name)  }  }  />
        <Text  style = {style.titleText}>
            {coin.name}
        </Text>
    </View>

<SectionList 
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
</View>
)
}
};

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: Color.charade,
    },

    subHeader: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        padding: 16, 
        flexDirection: 'row'
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
    sectionItem: {
        padding: 8
    },
    itemText: {
        color: '#fff',
        fontSize: 14
    },
    sectionTex: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
 })


export default CoinsDetailScreen;

