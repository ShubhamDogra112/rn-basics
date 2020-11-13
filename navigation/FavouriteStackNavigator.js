import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MealsDetailScreen from "../screens/MealDetailScreen/MealDetailScreen";
import FavoriteScreen from "../screens/FavouriteScreen/FavouriteScreen"
import Colors from "../consts/color";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/headerButton";


const Stack = createStackNavigator();
const FavouriteNavigator = (props) => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.secondaryColor,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Your Favourites"
          component={FavoriteScreen}
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
          name="MealDetail"
          component={MealsDetailScreen}
        />
      </Stack.Navigator>
  );
};

export default FavouriteNavigator