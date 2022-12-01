import React, { Component } from "react";
import { View,StyleSheet, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from './HomePage'
//import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator()

class TabBar extends Component {
    render() {
        return (
            
                <Tab.Navigator
                 screenOptions={{
                tabBarActiveTintColor:'red'
                 }} >
                    <Tab.Screen name="Delivery" component={HomePage}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <View style={styles.deliveryIcon}>
                                <Image style={styles.icon} source={require('../../Images/icons8-motorcycle-delivery-single-box-50.png')} />
                                </View>
                            )
                        }} />

                    <Tab.Screen name="Dining" component={HomePage}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <Image style={styles.icon} source={require('../../Images/Dining.png')} />
                            )
                        }} />

                    <Tab.Screen name="Grocery" component={HomePage}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <View style={styles.grocery}>
                                <Image style={styles.icon} source={require('../../Images/icons8-ingredients-50.png')} />
                                <Image style={styles.new} source={require('../../Images/icons8-new-24.png')}/>
                                </View>
                            )
                        }} />

                    <Tab.Screen name="Zomaland" component={HomePage}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <Image style={styles.icon} source={require('../../Images/ZomaLand.png')} />
                            )
                        }} />
                    <Tab.Screen name="Concert" component={HomePage}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <Image style={styles.icon} source={require('../../Images/Concert.png')} />
                            )
                        }} />
                </Tab.Navigator>
            
        )
    }
}
const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 25
    },
    deliveryIcon:{
        borderColor:'red',
        borderTopWidth:2,
        width:50,
        padding:8
    },
    grocery:{
       //borderWidth:2,
       flexDirection:'row',
       //paddingHorizontal:5,
       padding:4
    },
    new:{
        height:20,
        width:25,
        position:'absolute',
         left:25,
    }
    
})
export default TabBar;



