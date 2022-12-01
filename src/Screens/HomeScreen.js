import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import TabBar from "./TabBar";
import ShowPage from "./ShowPage";

const Stack=createNativeStackNavigator();

class HomeScreen extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                 <Stack.Screen name="Home" component={TabBar}
                 options={{headerShown:false}}/>
                 <Stack.Screen name="ShowPage" component={ShowPage}
                 options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default HomeScreen;