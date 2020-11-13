import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login/Login"
import SignUpScreen from "../screens/SignUp/SignUp"
import Colors from "../consts/color"



const Stack = createStackNavigator();
const AuthNavigator = (props) => {
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
          name={'Login'}
          component={LoginScreen}
          options={{
            headerTitleStyle:{
              color:Colors.primaryColor
            },
            animationEnabled:false,
            headerShown:false,
          }}

        />
            <Stack.Screen
          name={'SignUp'}
          component={SignUpScreen}
          options={{
            headerTitleStyle:{
              color:Colors.primaryColor,
            },
            animationEnabled:false,
            headerShown:false
          }}

        />
        
        
      </Stack.Navigator>
  );
};

export default AuthNavigator