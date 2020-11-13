import React , {useEffect} from 'react'
import {authCheck} from "./store/actions/index"
import {connect} from "react-redux"
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigation/authStackNavigator"
import AppNavigator from "./navigation/mealsDrawerNavigator"

const StartScreen = (props) => {

    
useEffect( ()=>{
        props.auth_check()
},[])

  
    
        return(
            <NavigationContainer>
            
                {!props.authenticated   ?
                 (<AuthStack/>) 
                 : 
                 (<AppNavigator/>)}
            </NavigationContainer>
        )
    }

const mapStateToProps = state => {
    return{
        authenticated : state.auth.token !== null
    }
}

const mapDispatchToProps  = dispatch => {
    return{
      auth_check : ()=>dispatch(authCheck())
    }
  }

export default connect(mapStateToProps , mapDispatchToProps)(StartScreen)
