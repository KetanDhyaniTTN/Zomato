import React, { Component } from "react";
import { StyleSheet, Image } from "react-native"
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
                                <Image style={styles.icon} source={require('../../Images/icons8-motorcycle-delivery-single-box-50.png')} />
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
                                <Image style={styles.icon} source={require('../../Images/icons8-ingredients-50.png')} />
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
    }
})
export default TabBar;



