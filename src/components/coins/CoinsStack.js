import React from "react";
import { createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import CoinsScreen from "./CoinsScreen"
import CoinsDetailScreen from "./CoinsDetailScreen";
import colors from "../../resourse/colors";

const Stack = createStackNavigator();

const CoinstStack = () => {
return (
<Stack.Navigator
screenOptions={{
headerStyle:{
 backgroundColor: colors.blackpearl,
 shadowColor: colors.blackpearl
},
headerTintColor: colors.white 

}


}
>
<Stack.Screen 
    name = "Coins" 
    component= {CoinsScreen}/> 
<Stack.Screen 
    name = "CoinsDetail" 
    component= {CoinsDetailScreen}/> 
</Stack.Navigator>

);
}

export default CoinstStack;