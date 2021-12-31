import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinstStack from "../CryptoScanner/src/components/coins/CoinsStack"

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <CoinstStack/>
      
    </NavigationContainer>
  );
}

//export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
