import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../consts/color";
import FilterScreen from "../screens/FilterScreens/FilterScreen"
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
          name="Filters"
          component={FilterScreen}
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
      </Stack.Navigator>
  );
};

export default FavouriteNavigator