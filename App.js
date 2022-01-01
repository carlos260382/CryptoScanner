import React from 'react';
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from "../CryptoScanner/src/components/coins/CoinsStack";
import FavoritesStack from './src/components/favorites/favoritesStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './src/resourse/colors';

const Tabs = createBottomTabNavigator();
// import { StatusBar } from 'expo-status-bar';


export default function App() {


  return (
    <NavigationContainer>
    <Tabs.Navigator styles = { styles.container} //pendiente revisar el estilo 
    // screenOptions= {{
    //   tintColor: '#fefefe',
    //   style:{
    //     backgroundColor: colors.blackpearl 
    //   } 
    // }}
    >
      <Tabs.Screen 
        name = 'coins' 
        component = {CoinsStack}
        options={{
          tabBarIcon: ( { size, color } )=>{
            <Image //no renderiza pendiente revisar
            //styles = { styles.img}
            style = {{tintColor:color, width: size, height: size} } 
            source={ require('./src/assets/home.png')}  />
          }
        }}  
      />
      <Tabs.Screen 
        name = 'Favorites' 
        component = {FavoritesStack}
        options={{
          tabBarIcon: ({ size, color })=>{
            <Image //no renderiza pendiente revisar
            // styles = { styles.img}
            style = {{tintColor:color, width: size, height: size} } 
            source={ require('./src/assets/Favorites.png')}  />
          }
        }}  
      />



    </Tabs.Navigator>
   </NavigationContainer>
  );
}

//export default App;

const styles = StyleSheet.create({
  container: {
    color: '#fefefe',
    backgroundColor: colors.blackpearl
  },
  img : {
    width: 25,
    height:25
  }
});
