import React  from "react";
import Colors from "../consts/color";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import { Ionicons } from "@expo/vector-icons";
import {Platform} from "react-native"
import HomeStack from "./homeStackNavigator"
import FavouriteStack from "./FavouriteStackNavigator"



const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() :  createBottomTabNavigator();
const MealsTabNavigtor  = props => {

  return <Tab.Navigator
            // bar style are for material bottom tabs
              barStyle={{
                backgroundColor:'#ededed',
                // display:props.authenticated ? null:'none'
              }}
              activeColor={Colors.secondaryColor}
              shifting={true}
              // labeled={false}
              inactiveColor={'#777'}
              tabBarOptions={{
                showLabel:true,
                // keyboardHidesTabBar:true
                // activeBackgroundColor:'#ededed',
              }}>
                <Tab.Screen
                 name="Meals"
                component={HomeStack}
                options={{
                  tabBarIcon : ({color})=>(
                    <Ionicons name="md-home" size={24} color={color} />
                  ),
                  // tabBarVisible:props.authenticated,

                  // tabBarColor:"#ededed",

                
                }} />
                <Tab.Screen
                 name="Favourite"
                  component={FavouriteStack}
                  options={{
                    tabBarIcon : ({color})=>(
                    <Ionicons name="md-star" size={24} color={color} />
                    )

                    // tabBarColor:"#fff"
                    
                  }} />
              </Tab.Navigator>
        
          
}



export default MealsTabNavigtor;
