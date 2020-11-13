import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoryScreen/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen/CategoryMealScreen";
import MealsDetailScreen from "../screens/MealDetailScreen/MealDetailScreen";
import Colors from "../consts/color";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/headerButton";
import * as Notifications from "expo-notifications"

Notifications.setNotificationHandler({
  handleNotification:async ()=>{
    return{
      shouldPlaySound:true,
      shouldShowAlert:true
    }
  }
})


const Stack = createStackNavigator();
const HomeNavigator = (props) => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
          <Stack.Screen
         name="Meal Categories"
          component={CategoriesScreen}
          options={{
            headerLeft: () =>(
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => props.navigation.toggleDrawer()}
                />

                
              </HeaderButtons>
            ),
          }}
          />
        <Stack.Screen
          name="CategoryMealScreen"
          component={CategoryMealScreen}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealsDetailScreen}
          options={{
            headerRight: () =>(
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName="md-star"
                  onPress={() => {
                    Notifications.scheduleNotificationAsync({
                      content:{
                        title:"First Notification",
                        body:"Working fine  "
                      },
                      trigger:{
                        seconds:5
                      }
                    })
                  }}
                />

                
              </HeaderButtons>
            ),
          }}
        />
      
        
      </Stack.Navigator>
  );
};



export default HomeNavigator