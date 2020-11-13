import React from "react";
import Colors from "../consts/color";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native'
import TabNavigator from "./mealsTabNavigator"
import FiltersStack from "./filtersStackNavigator"
import {connect} from 'react-redux'
import Logout from "../screens/logout"

const Drawer = createDrawerNavigator();

const MealsDrawerNavigtor  = props => {
  const dimensions= useWindowDimensions();
  return <Drawer.Navigator
            // drawerType={'front'}
            drawerStyle={{width:dimensions.width * 0.65,paddingTop:15}}
            drawerContentOptions={{
              activeBackgroundColor:Colors.primaryColor,
              activeTintColor:'white'
            }}
             initialRouteName= "Home"
             >  
                <Drawer.Screen name="Home" component={TabNavigator} options={{swipeEnabled:props.authenticated}} />
                <Drawer.Screen name="Filters" component={FiltersStack} />
                <Drawer.Screen name="Logout" component={Logout}/>
            </Drawer.Navigator>
          
}

const mapStateToProps = state => {
  return{
    authenticated : state.auth.token !== null
  }
}
export default connect(mapStateToProps , null)(MealsDrawerNavigtor);
